import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiMongodb} from 'react-icons/si'
import {DiRedis} from 'react-icons/di'
import {FaNodeJs} from 'react-icons/fa'
import {BiLogoPostgresql} from 'react-icons/bi'

// mine
import { FaPython } from 'react-icons/fa'; 
import { SiAndroidstudio } from 'react-icons/si';
import { SiRust } from 'react-icons/si';
import { SiCplusplus } from 'react-icons/si';
import { SiFlutter } from 'react-icons/si';

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl'> Technologies</h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-green-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiCplusplus className='text-7xl text-blue-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaPython className='text-7xl text-yellow-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiRust className='text-7xl text-orange-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiAndroidstudio className='text-7xl text-green-700'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiFlutter className='text-7xl text-blue-400'/>
            </div>
            
        </div>
    </div>
  )
}

export default Technologies