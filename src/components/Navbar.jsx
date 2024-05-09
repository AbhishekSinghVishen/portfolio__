import React from 'react'
import logo from "../assets/kevinRushLogo.png"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

import {FaInstagram} from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-10' src={logo} alt="" />
            
        </div>
        <div className='flex justify-center gap-3 px-2'>
            <FaLinkedin/>
            <FaGithub/>
            <FaInstagram/>
           
        </div>

    </nav>
  )
}

export default Navbar