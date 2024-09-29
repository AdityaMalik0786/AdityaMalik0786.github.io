import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.jpg';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"
import { FaHeart } from "react-icons/fa6";
import {CiCoffeeCup} from "react-icons/ci";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Home = () => {
  function PauseOnHover() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
  }
  
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Aditya</b></h1>
          <Typed/>
          <div className='links'
          ><h4>Connect with me</h4>
              <div className='HeaderLinks'>
              
                <a href='https://github.com/AdityaMalik0786' target='_blank'><FaGithub/></a>
                <a href="https://www.linkedin.com/in/aditya-malik-3677a700b" target='_blank'><FaLinkedin/></a>
                <a href="mailto:adityamalik18485@gmail.com" target='_blank'>
                  <GrMail />
                </a>
                <a href="https://leetcode.com/u/AdityaMalik0786/" target='_blank'>  <SiLeetcode/> </a>
              </div>
          </div>
        </div>

        <Lottie
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>INTRO</b></h1>
          <ul>
            <li>I am <b>Aditya Malik</b> , AI and ML engineering student at Chandigarh University with hands-on experience in <b>machine learning</b> projects during his internship at <b>Quickway Infosystem</b></li>
            <li>Proficient in <b>C++</b> and <b>DBMS</b>, he has worked on <b>facial recognition</b>, waste segregation using <b>IoT</b>, and water monitoring web apps.</li>
            <li> He is also certified in <b>Microsoft Azure</b> AI fundamentals and Oracle Generative AI, and has contributed a research paper to an <b>IEEE</b> conference.</li>
            <li><span className=''>Explore my portfolio to see the projects I've brought to life!</span></li>
          
          <br></br>
          <br></br>
          <br></br>
          </ul>
        </div>
        <Tilt>
          <img className='Avatar w-48 h-96 object-cover rounded-full' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home