import logo from "../logosjw.png";
import { FaLinkedin, FaGithub, FaInstagram, FaFilePdf } from 'react-icons/fa'
import React from 'react'
import { CONTACT } from '../../constants';
import { motion } from 'framer-motion';
import resume from "./Resume_Suyash_v01212026.pdf";


const iconLogo = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

const NavBar = () => {
  return <nav className='mb-20 flex items-center justify-between py-6'>
    <motion.div
      variants={iconLogo(8)}
      initial='initial'
      animate='animate'
      className='flex flex-shrink-0 items-center'>
      <img src={logo} className='mx-2 w-20' alt="logo" />
    </motion.div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
      <a href={resume} target="_blank" rel="noopener noreferrer">
        <FaFilePdf />
      </a>
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