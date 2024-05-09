import React from "react";
import projetct1 from "../assets/projects/project1.jpg";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Projects = () => {
  return (
    <div name="projects" className="flex items-center justify-center min-h-screen gap-4 w-full flex-col md:flex-row">
      <div className="mx-auto">
        <h3 className="hidden md:flex md:justify-center font-bold text-4xl mb-12">Projects</h3>
        <div className="flex flex-col items-center justify-center gap-4 mx-auto md:flex-row lg:gap-x-14 md:gap-x-6">
          <img src={projetct1} alt="" className="rounded-lg object-cover mb-2 md:mb-0 lg:flex hidden lg:min-w-[500px] lg:size-[300px] md:hidden" />
          <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start h-full w-full mx-auto lg:min-h-[300px]">
            <h3 className="text-3xl font-bold md:hidden mb-5 md:mb-0">Projects</h3>
            <img src={projetct1} alt="" className="size-48 rounded-lg object-cover mb-2 lg:hidden my-3 min-w-[300px] md:size-[350px] md:min-w-[660px]" />
            <h1 className="text-xl text-gray-200 font-bold">Workout List💪🏼</h1>
            <p className="mt-2 md:mt-0 text-xs flex items-center justify-center text-gray-400 w-full max-w-[280px] md:max-w-[500px] lg:max-w-[260px] md:text-base">
              Workout List is a website that facilitates users in creating a list of exercises according to their program.
            </p>
            <div className="text-gray-400 text-center text-xs md:text-sm font-bold grid grid-cols-3 md:grid-cols-5 lg:grid-cols-2 lg:gap-2 gap-2 md:gap-3 lg:text-sm mt-3 ">
              <div className="flex items-center justify-center border-2 py-1 px-2 border-gray-800 rounded-md gap-1">
                <FaReact />
                <h1 className="">ReactJs</h1>
              </div>
              <div className="flex items-center justify-center border-2 py-1 px-2 border-gray-800 rounded-md gap-1">
                <RiTailwindCssFill />
                <h1 className="">Tailwind</h1>
              </div>
              <div className="flex items-center justify-center border-2 py-1 px-2 border-gray-800 rounded-md gap-1">
                <FaNodeJs />
                <h1 className="">NodeJs</h1>
              </div>
              <div className="flex items-center justify-center border-2 py-1 px-2 border-gray-800 rounded-md gap-1">
                <SiExpress />
                <h1 className="">ExpressJs</h1>
              </div>
              <div className="flex items-center justify-center border-2 py-1 px-2 border-gray-800 rounded-md gap-1">
                <SiMongodb />
                <h1 className="">MongoDB</h1>
              </div>
            </div>
            <div className="cursor-pointer flex flex-row  gap-3 mt-4 text-lg font-bold ">
              <div className="transition-all duration-500 ease-in-out hover:text-gray-500/75 flex justify-center items-center gap-2 px-2 py-1 hover:border-gray-500/75 rounded-lg border-2 text-sm ">
                <a href="https://github.com/wahyuedy/workouts-list" target="_blank" rel="noopener noreferrer">
                  Code
                </a>
                <FaGithub/>
              </div>
              <div className="transition-all duration-500 ease-in-out hover:text-gray-500/75 flex justify-center items-center gap-2 px-2 py-1 hover:border-gray-500/75 rounded-lg border-2 text-sm">
                <a href="https://workoutslist.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <FaArrowUpRightFromSquare />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
