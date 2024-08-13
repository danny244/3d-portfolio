/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants'
import { staggerContainer, textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
      <VerticalTimelineElement
            contentStyle={{ background: '#1d1836', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #232631' }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={<div className='flex justify-center items-center w-full h-full'>
                  <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[40%] h-[40%] object-contain'
                  />
            </div>}
      >
            <div>
                  <h3 className='text-white text-[13px] font-bold'>{experience.title}</h3>
                  <p className='text-secondary text-[10px] font-semibold' style={{ margin: 0 }}>{experience.company_name}</p>
            </div>

            <ul className='mt-3 ml-5 list-disc space-y-2'>
                  {experience.points.map((point, index) => (
                        <li key={`experience-point-${index}`} className='text-white-100 text-[10px] pl-1 tracking-wider'>
                              {point}
                        </li>
                  ))}
            </ul>
      </VerticalTimelineElement>
)

const Experience = () => {
      return (
            <motion.section id='work' variants={staggerContainer()} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.25 }} className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
                  <motion.div variants={textVariant()}>
                        <p className={styles.sectionSubText}>What i have done so far.</p>
                        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
                  </motion.div>

                  <div className='mt-16 flex flex-col'>
                        <VerticalTimeline>
                              {experiences.map((experience, index) => (
                                    <ExperienceCard key={index} experience={experience} />
                              ))}
                        </VerticalTimeline>
                  </div>

            </motion.section>
      )
}

export default Experience