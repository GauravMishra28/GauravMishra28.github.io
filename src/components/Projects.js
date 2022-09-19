import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white ">
           My Projects
          </h1>
        </div>
        <div className="flex flex-wrap -m-4" style={{width:"100%"}}>
          {projects.map((project) => (
         
              <div className="sm:w-1/2 w-100  px-4 py-5" >
                <div className="px-8 py-10 shadow-sm	box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05) border-solid border-4 border-green-600 ;"
               >
                <img style= {{height:"60%"}}
                  alt="gallery"
                  // className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                {/* <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100"> */}
                <div className="px-8 py-10">
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <h5 className="tracking-widest text-sm title-font font-medium text-white mb-1">
                   Tech Stack: {project.stack}
                  </h5>
                  <div  class="flex justify-around " >
                    <div class="bg-white flex">
                      <a href={project.github} target="blank"><img alt="derf" src="https://img.icons8.com/sf-regular-filled/48/000000/github.png"/></a>
                    </div>
                    
                    <div ><a href={project.link} target="blank"><img alt="abc" src="https://img.icons8.com/emoji/48/000000/rocket-emji.png"/></a></div>
                  </div>
                </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
