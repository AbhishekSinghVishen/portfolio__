import React from 'react'
import { CONTACT } from '../constants'
import {motion} from "framer-motion"
const Contact = () => {
  const emailAddress = 'abhi209304@gmail.com';
  return (
    <div className='border-b border-neutral-900 pb-2'>
        <motion.h1
         whileInView={{opacity: 1,y:0}}
         transition={{duration:0.5}}
         initial={{opacity: 0,y:-100}} 
        className='my-10 text-center text-4xl '>Get In Touch</motion.h1>
        <div className='text-center tracking-tighter'>
            <motion.p 
             whileInView={{opacity: 1, x:0}}
             initial={{opacity: 0, x:-100}}
             transition={{duration:1}}
            className='my-4 '>{CONTACT.address}</motion.p>
            <motion.p 
             whileInView={{opacity: 1, x:0}}
             initial={{opacity: 0, x:100}}
             transition={{duration:1}}
            className='my-4'>{CONTACT.phoneNo}</motion.p>
            <motion.a
            whileInView={{opacity: 1, y:-100}}
            initial={{opacity: 0, y:100}}
            transition={{duration:0.5}}
             href={`mailto:${emailAddress}`}>{emailAddress}</motion.a>.
        </div>
    </div>
  )
}

export default Contact