import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Skills from "./Skills";
import { CgMail } from "react-icons/cg";
import image2 from "../assets/image2.jpg";

const Hero = () => {
  return (
    <div name="home" className="flex items-center gap-4 justify-center h-screen flex-col w-full my-5 md:my-0">
      <div className="flex md:flex-row-reverse flex-col justify-center items-center mx-auto lg:gap-x-14 md:gap-x-10">
        <img src={image2} alt="" className="hidden md:flex md:size-80 size-48 rounded-lg object-cover mb-3 md:mb-0" />
        <div className="w-full md:max-w-[370px] max-w-[300px]">
          <div className="font-bold md:text-4xl text-2xl items-center justify-center flex flex-col md:flex-none md:items-start py-0.5 mb-2 md:mb-0">
            <h3 className="md:text-[45px] text-[35px]">Full-Stack</h3>
            <span>Web Developer</span>
          </div>
        <img src={image2} alt="" className=" md:size-72  size-48 rounded-lg object-cover mb-3 md:mb-0 md:hidden flex mx-auto" />
          <p className="mt-1 md:text-sm text-xs text-gray-400">Hi, I'm Wahyu Edy Prasetyo, a passionate full stack web developer skilled in both client-side development and server management👋🏼</p>
          <div className="flex md:mt-5 mt-3 gap-4 justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/wahyu-edy-prasetyo-410433301/" target="_blank" rel="noopener noreferrer">
              <IoLogoLinkedin size={23} />
            </a>
            <a href="https://github.com/wahyuedy" target="_blank" rel="noopener noreferrer">
              <FaGithub size={23} />
            </a>
            <a href="https://www.instagram.com/wahyudyp_/" target="_blank" rel="noopener noreferrer">
              <BsInstagram size={23} />
            </a>
          </div>
          <div className="mt-3 max-w-[130px] bg-gray-200 text-black font-bold rounded-lg md:px-4 md:py-1 lg:hover:bg-gray-500/75 transition-all duration-300 ease-in-out flex items-center text-xs justify-center gap-1 cursor-pointer mx-auto md:mx-0 md:mt-5">
            <a href="mailto:wahedypras@gmail.com">
              {" "}
              Contact Me{" "}
            </a>
            <CgMail size={20} />
          </div>
        </div>
      </div>
      <div className="lg:mr-[220px] md:mr-[200px] md:mt-7">
        <Skills />
      </div>
    </div>
  );
};

export default Hero;
