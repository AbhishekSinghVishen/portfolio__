import React from 'react'
import logo from "../assets/kevinRushLogo.png"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

import {FaInstagram} from "react-icons/fa";
const Navbar = () => {
 
  
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
        <a className='mx-2 w-10 text-xs whitespace-none' href="https://drive.google.com/file/d/17qblbLspTCEW_YwRe_BOO1dPHsYkjcSX/view?usp=drive_link" download="resume.pdf" target="_blank" rel="noopener noreferrer">
        Download Resume
      </a>
            
            
        </div>
        <div className='flex justify-center gap-3 px-2'>
        <a href="https://www.linkedin.com/in/abhishek-singh-a4b68b1a8/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/AbhishekSinghVishen" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
            
            <FaInstagram/>
           
        </div>

    </nav>
  )
}

export default Navbar