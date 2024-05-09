import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="border-t-[2px] border-gray-700">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-3xl font-bold">
          <h1>Wahyu Edy Prasetyo</h1>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">Thank you for visiting my portfolio website. I really appreciate it!😊</p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 text-gray-500">
          <li>
            <a class="transition-all duration-500 ease-in-out hover:text-gray-700/75" href="#">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </a>
          </li>

          <li>
            <a class="transition-all duration-500 ease-in-out hover:text-gray-700/75" href="#">
            <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </a>
          </li>

          <li>
            <a class="transition-all duration-500 ease-in-out hover:text-gray-700/75" href="#">
            <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </a>
          </li>

          <li>
            <a class="transition-all duration-500 ease-in-out hover:text-gray-700/75" href="mailto:wahedypras@gmail.com">
              {" "}
              Contact Me{" "}
            </a>
          </li>
        </ul>

        <div className="mt-12 flex justify-center gap-6 md:gap-8 text-gray-500">
          <a className="transition-all duration-500 ease-in-out hover:text-gray-700/75" href="https://www.linkedin.com/in/wahyu-edy-prasetyo-410433301/" target="_blank" rel="noopener noreferrer">
            <IoLogoLinkedin size={23} />
          </a>
          <a className="transition-all duration-500 ease-in-out hover:text-gray-700/75" href="https://github.com/wahyuedy" target="_blank" rel="noopener noreferrer">
            <FaGithub size={23} />
          </a>
          <a className="transition-all duration-500 ease-in-out hover:text-gray-700/75" href="https://www.instagram.com/wahyudyp_/" target="_blank" rel="noopener noreferrer">
            <BsInstagram size={23} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
