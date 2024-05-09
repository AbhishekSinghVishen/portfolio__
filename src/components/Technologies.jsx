import {RiReactjsLine} from "react-icons/ri"
import {SiMongodb} from "react-icons/si"
import {FaNodeJs} from "react-icons/fa"
import {motion} from 'framer-motion'

const iconvar = (duration)=>({
    intial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat: Infinity,
            repeatType:"reverse",
    
    },
}});
const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1
         whileInView={{opacity:1, y:0}}
         initial={{opacity:0, y:-100}}
         transition={{duration:1.5}}
         className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        intial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants={iconvar(2.5)}
            intial="initial"
            animate="animate"

            className='rounded-2xl border-4 border-neutral-800 p-4'>
           
                <RiReactjsLine className="text-7xl "/>
            </motion.div>
            <motion.div 
            variants={iconvar(6)}
            intial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className="text-7xl "/>
            </motion.div>
            <motion.div 
            variants={iconvar(5)}
            intial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className="text-7xl "/>
            </motion.div>
            <motion.div 
            variants={iconvar(3)}
            intial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className="text-7xl "/>
            </motion.div>
            <motion.div 
            variants={iconvar(4)}
            intial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs  className="text-7xl "/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies