import logo from "../logosjw.png";
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa'
import React from 'react'
import { CONTACT } from '../../constants'; 

const NavBar = () => {
  return <nav className='mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
        <img src={logo} className='mx-2 w-20' alt="logo" />
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
      <a href={CONTACT.LinkedIn} target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href={CONTACT.Github} target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </div>

  </nav>
}

export default NavBar