import { Suspense, useEffect, useState } from "react";
// Canvas is just an empty canvas that allows us to place something on it
import { Canvas } from "@react-three/fiber";
// The imports down there helps us to draw While The [USEGLTF] here allows us to import 3D models
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    // When working with three js we dont start with dive we start with a tag called mesh
    <mesh>
      {/* Inside of the mesh we need to first create a light else we wont see anything */}
      <hemisphereLight intensity={0.15} groundColor='black' />
      {/* The point light here is the one u see on the screen of the computer when ever you turn*/}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75} //This makes it a little smaller
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} //these are the positions for the left and y axis
        rotation={[-0.01, -0.2, -0.1]} //this is goint to help it rotate nicely on the screen
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    // The camera here allows us to see the image from all sides //The [FOV] there means {FIELD OF VIEW} and how wide our field of view is goint to be is 25
    //They created a position for the x, y , z axis
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* This allows us to have a loader while our image is loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* These control allows us to move over loader left to right */}
        <OrbitControls
          enableZoom={false}
          // This allows us to only be able to move the canvas at a specific angle and not up and down or left and right
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
