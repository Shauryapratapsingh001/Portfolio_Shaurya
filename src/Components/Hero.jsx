import React from "react";
import image from "../assets/Shaurya.png";
import { useState, useEffect } from "react";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "MERN Stack Developer",
    "Prompt Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Node Js Developer",
    "React Js Developer",
    "Express Js Developer",
  ];

  useEffect(() => {
    const currentWord = roles[index];
    let speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center sm:px-6 md:px-10 lg:px-20 bg-gray-950 flex-col   lg:flex-row md:flex-row gap-10 md:gap-6"
    >
      <div className="max-w-5xl w-full mt-5 flex flex-col-reverse md:flex-row gap-6 items-center">
        {/* LEFT */}
        <div className="md:w-1/2 flex flex-col gap-4 sm:gap-6 text-white text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Hi, I am
            <span className="block text-orange-500 text-2xl sm:text-3xl md:text-4xl mt-2">
              Shaurya Pratap Singh
            </span>
          </h1>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4 sm:mt-6">
            I am a,,
            <span className="text-blue-600 transition-all duration-500">
              {text}
            </span>
          </h3>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg font-medium">
            As a MERN Stack Developer, I specialize in building dynamic and
            responsive web applications using React.js .With a strong foundation
            in both frontend development . I am dedicated to staying updated
            with the latest technologies and best practices in the industry to
            deliver high-quality projects
          </p>

          <div className="flex items-center gap-4 sm:gap-6 mt-6 mb-6 justify-center md:justify-start">
            <a
              className="text-black bg-amber-300 px-5 py-3 rounded-full w-max"
              href="#about"
            >
              Hire Me
            </a>
            <a
              className="text-black bg-amber-300 px-5 py-3 rounded-full w-max"
              href="#project"
            >
              View Work
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center items-center md:w-1/2">
          <img
            className="drop-shadow-[0_0_10px_orange] w-52 sm:w-72 md:w-96 lg:w-96 object-contain"
            src={image}
            alt="Hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

/* import React from 'react'
import image from "../assets/Shaurya.png"
import { useState, useEffect } from 'react';
const Hero = () => {

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "MERN Stack Developer",
    "Prompt Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Node Js Developer",
    "React Js Developer",
    "Express Js Developer"
  ];

  useEffect(() => {
    const currentWord = roles[index];
    let speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // typing
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          // wait before deleting
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        // deleting
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (

    <section className="w-full h-full flex items-center justify-center p-13 bg-gray-950 flex-col-reverse md:flex-row md:gap-0 ">
      <div className='md:w-1/2 flex flex-col gap-5 p-25  text-white'>
        <h1 className='text-5xl font-bold'>Hi, I am <span className='text-orange-500 text-4xl'>Shaurya Pratap Singh</span></h1>
        <h3 className='text-3xl font-bold mt-10'>I am a <span className='text-blue-600 transition-all duration-500'> {text}</span></h3>
        <p className='text-gray-400 text-xl font-semibold'>As a MERN Stack Developer, I specialize in building dynamic and responsive web applications using React.js .With a strong foundation in both frontend development . I am dedicated to staying updated with the latest technologies and best practices in the industry to deliver high-quality projects.</p>
        <div className='flex items-center gap-15 mt-10'>
          <a className='text-black  bg-amber-300 px-6 py-4 rounded-full w-max ' href="#contact" >Hire Me</a>
          <a className='text-black  bg-amber-300 px-6 py-4 rounded-full w-max' href="#projects" >View Work</a>
        </div>
      </div>
      <div className="md:w-1/2 flex items-center justify-center p-24">
        <img className='drop-shadow-[0_0_10px_orange]' src={image} width={430} height={430} alt="Hero Image" />
      </div>


    </section>

  )
}

export default Hero */
