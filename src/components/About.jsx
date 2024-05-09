import React from "react";
import image4 from "../assets/image4.jpg";


const About = () => {
  return (
    <div name="about" className="flex items-center justify-center h-screen gap-4 w-full flex-col md:flex-row">
      <div className="mx-auto">
        <h3 className="hidden md:flex md:justify-center font-bold text-4xl mb-12">About Me</h3>
        <div className="flex flex-col items-center justify-center gap-4 mx-auto md:flex-row lg:gap-x-14 md:gap-x-6">
          <img src={image4} alt="" className="rounded-lg object-cover mb-2 md:mb-0 hidden md:flex lg:size-80 md:size-[300px]" />
          <div className="flex flex-col items-center justify-center h-full w-full mx-auto">
            <h3 className="text-3xl font-bold md:hidden mb-5">About Me</h3>
            <img src={image4} alt="" className="size-48 rounded-lg object-cover mb-2 md:hidden my-3 " />
            <p className="mt-2 md:mt-0 text-xs flex items-center justify-center text-gray-400 w-full max-w-[280px] md:max-w-[370px] lg:max-w-[470px] md:text-base lg:text-lg">
              I am a full-stack web developer with expertise in various web development technologies. On the client side, I am skilled at designing responsive user interfaces using HTML, CSS, JavaScript, React.js, and Tailwind CSS. On the
              server side, I utilize Node.js with the Express.js framework for infrastructure management and business logic. I am also proficient in database management with PostgreSQL and MongoDB. With my experience and skills, I am
              committed to creating innovative and high-quality web solutions to meet the needs of businesses and users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
