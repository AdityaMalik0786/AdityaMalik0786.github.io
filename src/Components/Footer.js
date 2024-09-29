import React from 'react';
import {FaLinkedin,FaGithub} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <h4 className='inline-flex items-center gap-2'>Build with <span> <FaHeart/></span> by Aditya</h4>
      <h4>Copyright &copy; 2023 DS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/AdityaMalik0786" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/aditya-malik-3677a700b" target='_blank'><FaLinkedin/></a>
        <a href="mailto:adityamalik18485@gmail.com">
      <GrMail />
    </a>
        <a href="https://leetcode.com/u/AdityaMalik0786/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer