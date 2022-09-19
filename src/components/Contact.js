import React from "react";
import { AiFillGithub,AiFillLinkedin,AiFillMail } from "react-icons/ai";
import {UsersIcon } from "@heroicons/react/solid";

export default function Contact() {
 
  return (
    <section id="contact" className=" relative">
       <div className="flex flex-col justify-center items-center w-full ">
          <UsersIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white ">
       Contact Me
          </h1>
          </div>
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        
        <div className="lg:w-2/3  md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.13424057009!2d80.95876531512562!3d26.86747576850397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42bcdf1f4aac6e8e!2zMjbCsDUyJzAyLjkiTiA4MMKwNTcnMzkuNCJF!5e0!3m2!1sen!2sin!4v1663441805965!5m2!1sen!2sin"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 pr-8 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                E-2/3 Paper Mill <br />
                NishatGanj, Lucknow
              </p>
            </div>
            <div className="lg:w-1/2  lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                gauravmemishra@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">9044123468</p>
            </div>
          </div>
        </div>
        <div class="border-2 border-green-600 md:w-1/3 bg-gray-900 rounded-lg overflow-hidden sm:mr-10  flex justify-start relative">
          <div class="bg-black-900 m-auto"
            // style={{
            //   backgroundColor: "black",
            //   width: "100%",
            //   height: "100%",
            //   margin: "auto",
            // }}
          >
            <div
              onClick={() =>
                window.open("https://github.com/GauravMishra28", "_blank")
              }
              class="flex  gap-4 justify-center items-center no-underline hover:underline mb-7 "
            >
              <AiFillGithub class="text-4xl" />
              <h2 class="text-2xl">Github</h2>
            </div>
            <div
              onClick={() =>
                window.open("https://www.linkedin.com/in/gaurav-mishra-435814a8/", "_blank")
              }
              class="flex  gap-4 justify-center items-center no-underline hover:underline mb-7 "
            >
              <AiFillLinkedin class="text-4xl " />
              <h2 class="text-2xl">Linkedin</h2>
            </div>
            <div
              onClick={() =>
                window.open("mailto:gauravmemishra@gmail.com", "_blank")
              }
              class="flex  gap-4 justify-center items-center no-underline hover:underline "
            >
              <AiFillMail class="text-4xl " />
              <h2 class="text-2xl">Email</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
