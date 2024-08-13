/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'
import { staggerContainer } from '../utils/motion'

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => {
  return (
    <motion.div
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
      className='bg-black-200 p-7 rounded-3xl sm:w-[230px] w-full'
    >
      <p className='text-white font-black text-[14px]'>&quot;</p>

      <div className='mt-1 text-white text-[10px]'>
        <p>{testimonial}</p>

        <div className='mt-4 flex justify-center items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-[8px] text-white font-medium'>
              <span className='blue-text-gradient'>@</span> {name}
            </p>
            <p className='text-[8px] text-secondary font-medium'>
              {designation}, {company}
            </p>
          </div>
          <img src={image} alt={`feedback-by-${name}`} className='w-9 h-9 rounded-full object-cover' />
        </div>
      </div>

    </motion.div>
  )
}

const Feedbacks = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <div className=' bg-black-100 mt-20 rounded-[20px] xs:px-10 px-5 pb-16'>

        <div className={`${styles.padding}  `}>
          <motion.div variants={textVariant}>
            <p className={styles.sectionSubText}>What others say.</p>
            <h2 className={styles.sectionHeadText}>Testimonials.</h2>
          </motion.div>
        </div>

        <div className={`${styles.paddinX} mt-6 flex justify-center max-sm:flex-wrap  gap-5`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>

      </div>

    </motion.section>
  )
}

export default Feedbacks