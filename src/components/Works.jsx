/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import { Tilt } from 'react-tilt'
import { motion } from "framer-motion"
import { styles } from '../styles'
import { github } from '../assets'
import { projects } from '../constants'
import { fadeIn, staggerContainer, textVariant } from '../utils/motion'
import { Tilt } from "react-tilt"

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>

      <Tilt
        options={{ max: 45, scale: 1, speed: 50 }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] flex-col w-full'
      >
        <div className='relative w-full h-[190px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, '_blank')} //This is a link to a git hub page
              className='black-gradient w-10 h-10 flex justify-center items-center cursor-pointer rounded-full'
            >
              <img
                src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>

        </div>

        <div className='mt-3'>
          <h3 className='text-white font-bold text-[16px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[10px]'>{description}</p>
        </div>

        <div className='mt-2 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[11px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

      </Tilt>

    </motion.div>
  )
}

const Works = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Works.</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[10px] max-w-3xl leading-[17px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. it reflect my ability
          to solve complex problems, work with different technologies, and
          manage projects effectively
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

    </motion.section>
  )
}

export default Works