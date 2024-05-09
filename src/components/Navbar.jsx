import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { VscChromeClose } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { Link } from "react-scroll";
import avatar from '../assets/avatar.svg'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleCLick = () => setNav(!nav);
  return (
    <header class="fixed w-full top-0 z-50 bg-[#0F0F0F] h-16">
      <div class="mx-auto max-w-screen-xl px-5 sm:px-16 lg:px-24">
        <div class={`flex h-16 items-center justify-between `}>
              <Link to="home" smooth={true} duration={500}>
          <div class={`md:flex md:items-center md:gap-12 ${nav ? `opacity-0 transition-all ease-in-out duration-500` : 'opacity-100 transition-all ease-in-out duration-700'}`}>
            <h1 className="font-bold cursor-pointer flex justify-center items-center gap-2">
              <img src={avatar} alt="" className={`size-8 bg-gray-200 rounded-full`}/>
                Wahyu
            </h1>
          </div>
              </Link>

          <div class="hidden md:block">
            <nav aria-label="Global">
              <ul class="flex items-center gap-6 text-sm">
                <li>
                  <a class="transition-all duration-500 ease-in-out hover:text-gray-500/75" href="#">
                    <Link to="home" smooth={true} duration={500}>
                      Home
                    </Link>
                  </a>
                </li>

                <li>
                  <a class="transition-all duration-500 ease-in-out hover:text-gray-500/75" href="#">
                    <Link to="about" smooth={true} duration={500}>
                      About
                    </Link>
                  </a>
                </li>

                <li>
                  <a class="transition-all duration-500 ease-in-out hover:text-gray-500/75" href="#">
                    <Link to="projects" smooth={true} duration={500}>
                      Projects
                    </Link>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="bg-gray-200 text-black font-bold rounded-lg px-4 py-1 lg:hover:bg-gray-500/75 transition-all duration-500 ease-in-out hidden md:flex md:justify-center md:items-center text-sm justify-center gap-1">
            <a class="" href="mailto:wahedypras@gmail.com">
              {" "}
              Contact Me{" "}
            </a>
            <CgMail size={20} />
          </div>

          <div className={`transition-all px-5 duration-500 ease-in-out ${!nav ? "absolute top-[-490px] opacity-0 left-0 right-0" : "absolute top-5 left-0 right-0 opacity-100"} flex justify-center items-center`}>
            <div className="bg-[#0F0F0F] absolute top-0 left-0 right-0 h-full"></div>
            <nav className="relative z-10">
              <ul className="flex gap-4">
                <li>
                  <a className="transition-all duration-500 ease-in-out hover:text-gray-500/75" href="#">
                    <Link onClick={handleCLick} to="home" smooth={true} duration={500}>
                      Home
                    </Link>
                  </a>
                </li>
                <li className="">
                  <a className="transition-all duration-500 ease-in-out hover:text-gray-500/75" href="#">
                    <Link onClick={handleCLick} to="about" smooth={true} duration={500}>
                      About
                    </Link>
                  </a>
                </li>
                <li className="">
                  <a className="transition-all duration-500 ease-in-out hover:text-gray-500/75" href="#">
                    <Link onClick={handleCLick} to="projects" smooth={true} duration={500}>
                      Projects
                    </Link>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="bg-[#0F0F0F] absolute top-0 right-0 left-1/2 h-full"></div>
          </div>
          <div className={`flex justify-center items-center gap-3 md:hidden`}>
            <div className={`${nav ? `opacity-0 transition-all ease-in-out duration-500` : 'opacity-100 transition-all ease-in-out duration-700'} transition-all duration-300 ease-in-out bg-gray-200 text-black font-bold rounded-lg px-3 py-1 md:hidden flex justify-center md:items-center text-sm gap-1`}>
              <a class="" href="mailto:wahedypras@gmail.com">
                {" "}
                Contact Me{" "}
              </a>
              <CgMail size={20} />
            </div>
            <div class="block md:hidden z-10" onClick={handleCLick}>
              {!nav ? <TiThMenu size={17} /> : <VscChromeClose size={17} />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
