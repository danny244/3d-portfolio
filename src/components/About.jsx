/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, staggerContainer, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt className='xs:w-[170px] w-full'>
      <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        {/* The options here are the values of the TILt tag */}
        <div options={{ max: 45, scale: 1, speed: 1 }} className='bg-tertiary rounded-[20px] py-5 px-10 min-h-[200px] flex justify-evenly items-center flex-col '>
          <img src={icon} alt={title} className='w-12 h-12 object-contain' />
          <h3 className='text-white text-[12px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

function About() {
  return (
    <motion.section id='about' variants={staggerContainer()} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.25 }} className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction.</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[11px] max-w-3xl leading-[17px]'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi perferendis nisi architecto amet vel? Praesentium at quae autem architecto quisquam, repellendus a asperiores laborum dignissimos, consequatur, deleniti doloribus atque! Dicta!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </motion.section>
  )
}

export default About