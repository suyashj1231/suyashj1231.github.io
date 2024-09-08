import logo from '../assets/kevinRushLogo.png'
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa'
import React from 'react'

const NavBar = () => {
  return <nav className='mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
        <img src={logo} className='mx-2 w-10' alt="logo" />
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin/>
        <FaGithub/>
        <FaInstagram/>
    </div>

  </nav>
}

export default NavBar