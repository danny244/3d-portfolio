/* eslint-disable no-unused-vars */
import { technologies } from "../constants"
import { styles } from "../styles"
import { staggerContainer } from "../utils/motion"
import { BallCanvas } from "./canvas"
import { motion } from "framer-motion"

const Tech = () => {
  return (
    <motion.section variants={staggerContainer()} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.25 }} className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div key={technology.name} className='w-20 h-20'>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default Tech