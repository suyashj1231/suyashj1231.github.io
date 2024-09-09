import React from 'react'
import aboutImg from "../about.jpg"
import { ABOUT_TEXT } from '../../constants'
import { ABOUT_EDUCATION } from '../../constants'

const About = () => {
  return (
  <div className='border-b border-neutral-900 pb-4'>
    <h2 className='my-20 text-center text-4xl'>
        About
        <span className='text-neutral-500'> Me</span>
        </h2>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className= "flex items-center justify-center">
                    <img className="rounded-2xl"src= {aboutImg} alt="About" />
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start'>
                    <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                </div>
                {/* UCI */}
            <div className='flex justify-center lg:justify-start'>
            <div className='my-2 max-w-xl py-4 text-center lg:text-left'>
              <h3 className='text-2xl font-semibold'>Education</h3>
              <p>{ABOUT_EDUCATION}</p>
            </div>
            </div>
            {/* UCI end */}

        </div>
        </div>
        </div>)
}

export default About