import React from "react";
import Resume from "../resume/Resume.pdf"
export default function About() {
  return (
    <section  id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          {/* <span></span> */}
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Gaurav.
          </h1>
          {/* <h1 className="sm:text-3xl text-2xl mb-4 font-medium text-white">Full Stack Web Developer</h1> */}
          <p className="mb-8 sm:text-xl text-lg leading-relaxed">
          Full-Stack Web Developer with the ability to adapt and
           collaborate in rapidly changing environments.
          Hands-on experience with over 1000+ hours of Bootcamp
            structure learning JavaScript, ReactJs, NodeJs,
            MongoDB,ExpressJS,HTML5,CSS3 and Chakra UI
          </p>
          <div className="flex justify-center">
            <a target="blank"
              href={Resume}
              download="Gaurav_Resume"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
               Resume 
            </a>

          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./hero2.png"
          />
        </div>
      </div>
    </section>
  );
}
