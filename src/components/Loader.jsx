import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      {/* Showing the progress of the load of the model */}
      <p style={{ fontSize: 12, color: '#f1f1f1', fontWeight: 800, marginTop: 40 }} >{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader