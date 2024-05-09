import React from "react";
import html from "../assets/skills/html.svg";
import css from "../assets/skills/css.svg";
import js from "../assets/skills/js.svg";
import react2 from "../assets/skills/react2.svg";
import tailwind from "../assets/skills/tailwind.svg";
import node2 from "../assets/skills/node2.svg";
import postgresql from "../assets/skills/postgresql.svg";
import mongodb3 from "../assets/skills/mongodb3.svg";
import { SiExpress } from "react-icons/si";

const Skills = () => {
  return (
    <>
    <h1 className="md:hidden flex justify-center items-center font-bold text-xl mb-3">Tech Stack</h1>
    <div className="md:flex gap-2 md:justify-center md:items-center mx-auto grid grid-cols-5">
      <h1 className="hidden md:flex font-bold text-2xl mr-2 border-r-4 pr-4">Tech Stack</h1>
      <div className="col-span-5 grid grid-cols-5 md:flex md:justify-center md:items-center gap-2">
        <img src={html} alt="" className="md:size-8 size-10" />
        <img src={css} alt="" className="md:size-8 size-10" />
        <img src={js} alt="" className="md:size-8 size-10" />
        <img src={react2} alt="" className="md:size-8 size-10" />
        <img src={tailwind} alt="" className="md:size-8 size-10" />
      </div>
      <div className="col-span-5 flex justify-center gap-2">
        <img src={node2} alt="" className="md:size-8 size-10" />
        <SiExpress className="md:size-8 size-10" />
        <img src={postgresql} alt="" className="md:size-8 size-10" />
        <img src={mongodb3} alt="" className="md:size-8 size-10" />
      </div>
    </div>
  </>
  );
};

export default Skills;
