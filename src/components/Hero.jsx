/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>

        <div className='flex flex-col justify-center items-center mt-5'>
          {/* This two divs are for the purple dot and line at d hero page */}
          <div className='w-3 h-3 rounded-full bg-[#915eff] ' />
          <div className='w-[3px] sm:h-48 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className='text-[#915eff]'>Rick</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br /> interfaces and web applications
          </p>
        </div>

      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className="w-[25px] h-[50px] rounded-3xl border-2 border-secondary flex justify-center items-center">
            {/* Here we told it to move 25 pixels up and down */}
            <motion.d1v animate={{ y: [-10, 10, -10] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className='w-3 h-3 rounded-full bg-secondary ' />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero