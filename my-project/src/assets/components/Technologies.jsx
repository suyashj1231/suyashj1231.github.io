import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import {FaNodeJs} from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'; 
import { SiAndroidstudio } from 'react-icons/si';
import { SiRust } from 'react-icons/si';
import { SiCplusplus } from 'react-icons/si';
import { SiFlutter } from 'react-icons/si';
import { animate, motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial: { y: -15 },
  animate: {
    y: [0, -15],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});


const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'> Technologies</motion.h2>
        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>

            <motion.div
            variants={iconVariants(2)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            
            </motion.div>
            <motion.div
             variants={iconVariants(3)}
             initial='initial'
             animate='animate'
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div
             variants={iconVariants(1.3)}
             initial='initial'
             animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiCplusplus className='text-7xl text-blue-500'/>
            </motion.div>
            <motion.div
             variants={iconVariants(3)}
             initial='initial'
             animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaPython className='text-7xl text-yellow-500'/>
            </motion.div>
            <motion.div
             variants={iconVariants(1.5)}
             initial='initial'
             animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiRust className='text-7xl text-orange-500'/>
            </motion.div>
            <motion.div
             variants={iconVariants(2)}
             initial='initial'
             animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiAndroidstudio className='text-7xl text-green-700'/>
            </motion.div>
            <motion.div
             variants={iconVariants(2.8)}
             initial='initial'
             animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiFlutter className='text-7xl text-blue-400'/>
            </motion.div>
            
        </motion.div>
    </div>
  )
}

export default Technologies