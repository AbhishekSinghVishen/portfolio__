import { PROJECTS } from "../constants"
import {motion} from "framer-motion"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1
        whileInView={{opacity: 1,y:0}}
        transition={{duration:0.5}}
        initial={{opacity: 0,y:-100}}
         className="my-20 text-center text-4xl ">Projects</motion.h1>
        <motion.div>
        
            {PROJECTS.map((pr,index)=>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center ">
                    <motion.div
                     whileInView={{opacity: 1, x:0}}
                     initial={{opacity: 0, x:-100}}
                     transition={{duration:1}}
                     className="w-full lg:w-1/4">
                    <img 
                    src={pr.image} 
                    width={150} 
                    height={150} 
                    className="mb-6 rounded" 
                    alt={pr.title}
                     />
                    </motion.div>
                    <motion.div 
                     whileInView={{opacity: 1, x:0}}
                     initial={{opacity: 0, x:100}}
                     transition={{duration:1}}
                    className="w-full max-w-xl lg:w-3/4">
                        <h6>{pr.title}</h6>
                        <p className="mb-4 text-neutral-400 ">{pr.description}</p>
                        {pr.technologies.map((tech,index)=>(
                            <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">{tech}</span>
                        )
                        )}
                    </motion.div>
                </div>
                
            ))}
        </motion.div>
    </div>
  )
}

export default Projects