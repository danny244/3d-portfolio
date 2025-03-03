/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import '../App.css'

const Navbar = () => {
      const [active, setActive] = useState('')
      const [toggle, setToggle] = useState(false)
      return (
            <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>

                  <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

                        <Link to='/' className='flex items-center gap-2' onClick={() => { setActive(''); window.scrollTo(0, 0); }}>
                              <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
                              <p className="text-white text-[9px] font-bold cursor-pointer">
                              Rick <span className='sm:block hidden'>| John</span>
                              </p>
                        </Link>

                        <ul className='list-none hidden sm:flex flex-row gap-10'>
                              {navLinks.map((link) => (
                                    <li key={link.id} className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white hover:transition-colors hover:duration-700 text-[10px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
                                          <a href={`#${link.id}`}>{link.title}</a>
                                    </li>
                              ))}
                        </ul>

                        {/* For the screens below sm */}
                        <div className="sm:hidden flex flex-1 justify-end items-center">
                              <img src={toggle ? close : menu} alt="menu" className='w-5 h-5 object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />

                              <div className={`${!toggle ? 'inactive' : 'active'} flex p-6 black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[80px] z-10 rounded-xl`}>
                                    <ul className='list-none flex flex-col justify-end items-start gap-4'>

                                          {navLinks.map((link) => (
                                                <li key={link.id} className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white hover:transition-colors hover:duration-700 text-[10px] font-poppins font-medium cursor-pointer`} onClick={() => { setActive(link.title); setToggle(!toggle); }}>
                                                      <a href={`#${link.id}`}>{link.title}</a>
                                                </li>
                                          ))}

                                    </ul>
                              </div>

                        </div>

                  </div>

            </nav>
      )
}

export default Navbar
