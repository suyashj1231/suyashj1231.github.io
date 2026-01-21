import React from 'react'
import { ABOUT_TEXT } from '../constants'
import { ABOUT_EDUCATION } from '../constants'
import { motion } from 'framer-motion'
import TechAnimation from "./TechAnimation";

const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>
                About
                <span className='text-neutral-500'> Me</span>
            </motion.h2>
            <div className='flex flex-wrap'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className='w-full lg:w-1/2 lg:p-8'>
                    <div className="flex items-center justify-center">
                        <TechAnimation />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                    </div>
                    <div className='flex justify-center lg:justify-start'>
                        <div className='my-2 max-w-xl py-4 text-center lg:text-left'>
                            <h3 className='text-2xl font-semibold'>Education</h3>
                            <div>
                                {ABOUT_EDUCATION.map((education, index) => (
                                    <div key={index} className="mt-2">
                                        <p className="mb-2">
                                            <span className="text-sm text-neutral-500">{education.year}</span>
                                            <span className=" px-2 py-1 text-medium font-medium text-purple-100">{education.major}</span>
                                        </p>
                                        <p className="text-sm text-cyan-400">{education.location}</p>
                                        <div className="mb-4"></div>
                                    </div>
                                ))}
                            </div>
                            {/* <p>{ABOUT_EDUCATION}</p> */}
                        </div>
                    </div>
                    {/* UCI end */}

                </motion.div>
            </div>
        </div>)
}

export default About