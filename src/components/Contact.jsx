/* eslint-disable no-unused-vars */
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'
import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { slideIn, staggerContainer } from "../utils/motion"

// Perfect way to use form
const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_nfbz9ag',
      'template_axa3ygd',
      {
        from_name: form.name,
        to_name: 'Danny',
        from_email: form.email,
        to_email: 'idowudaniel054@gmail.com',
        message: form.message,
      },
      'HPiO43nt9cdXs_NkP'
    )
      .then(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as possible.')
        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false)
        console.log(error);
        alert('Something went wrong')
      })
  }

  return (
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      id="contact"
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <div id="" className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>Get in touch.</p>
          <h2 className={styles.sectionHeadText}>Contact.</h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-8 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white text-[11px] font-medium mb-3'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="what's Your Name ?"
                className='bg-tertiary py-3 px-4 placeholder:text-[10px] placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
              />
            </label>

            <label className='flex flex-col'>
              <span className='text-white text-[11px] font-medium mb-3'>Your Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="what's Your Email ?"
                className='bg-tertiary py-3 px-4 placeholder:text-[10px] placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
              />
            </label>

            <label className='flex flex-col'>
              <span className='text-white text-[11px] font-medium mb-3'>Your Message</span>
              <textarea
                rows='7'
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder="Enter Your Message"
                className='bg-tertiary py-3 px-4 placeholder:text-[10px] placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
              />
            </label>

            <button
              type='submit'
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>

          </form>

        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550] h-[350px]'
        >
          <EarthCanvas />

        </motion.div>

      </div>

    </motion.section>
  )
}

export default Contact