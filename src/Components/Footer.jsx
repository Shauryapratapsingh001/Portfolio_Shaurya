import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { TbArrowBigUp } from "react-icons/tb";
import cv_img from "../assets/Updated.pdf";

const Footer = () => {
  const linkStyle = "text-white hover:text-orange-500 transition duration-300";
  const buttonStyle =
    "p-3  gap-2 bg-purple-700 hover:bg-purple-600 px-4 py-2 text-white text-sm font-semibold rounded-xl w-fit transition-transform hover:scale-105";

  const spanstyle =
    "border-2 border-amber-600 p-2.5  font-semibold w-fit rounded-full transition-transform hover:scale-105 shadow shadow-teal-100 ";

  return (
    <section
      id="footer"
      className="w-full min-screen bg-gray-950 text-white shadow-2xl shadow-amber-400 px-6 py-12 md:px-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6 items-start justify-items-center md:justify-items-start">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h1 className="text-4xl md:text-5xl text-orange-500 font-bold">
            SPS
          </h1>
          <p className="font-semibold">REACT & FULL STACK DEVELOPER</p>
          <h2 className="text-2xl font-semibold text-orange-400">
            Shaurya Pratap Singh
          </h2>
          <p>
            Lucknow UtterPradesh ,India <br />
            shauryapsingh000@gmail.com
          </p>
          <a
            href={cv_img}
            download="cv_img"
            className="text-green-500 underline font-semibold cursor"
          >
            DOWNLOAD MY RESUME / CV
          </a>
        </div>
        <div className="flex flex-col gap-4 items-center md:items-start">
          <nav className="flex flex-row flex-wrap gap-3 justify-center md:justify-start font-semibold hover:text-orange-600">
            <a href="#home" className={linkStyle}>
              Home
            </a>
            <span className="dot">•</span>
            <a href="#about" className={linkStyle}>
              About
            </a>
            <span className="dot">•</span>
            <a href="#projects" className={linkStyle}>
              Projects
            </a>
            <span className="dot">•</span>
            <a href="#skills" className={linkStyle}>
              Skills
            </a>
            <span className="dot">•</span>
            <a href="#contact" className={linkStyle}>
              Contact
            </a>
          </nav>

          <div className="flex flex-col gap-8 items-center md:items-start">
            <h4 className="text-xl font-semibold text-orange-500 mb-8 ">
              Top Skills
            </h4>
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              <span className={spanstyle}>JavaScript</span>
              <span className={spanstyle}>Python</span>
              <span className={spanstyle}>React</span>
              <span className={spanstyle}>Node.js</span>
              <span className={spanstyle}>Express.js</span>
              <span className={spanstyle}>MongoDB</span>
              <span className={spanstyle}>Tailwind CSS</span>
              <span className={spanstyle}>Vercel</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center md:justifys-start">
          <h1 className="text-2xl md:text-3xl text-orange-500 font-bold ">
            Let's build something amazing together 🚀
          </h1>
          <p className="text-l  text-white ">
            Available for freelance & full-time opportunities.
          </p>
          <div className="flex flex-col gap-4 items-center md:items-start">
            <a
              href="https://www.linkedin.com/in/shaurya-pratap-singh-5599391b5/"
              target="_blank"
              className={buttonStyle}
            >
              MESSAGE ME ON LINKEDIN
            </a>
            <a
              href="https://github.com/Shauryapratapsingh001?tab=repositories "
              target="_blank"
              className={buttonStyle}
            >
              VIEW MY GITHUB
            </a>
          </div>
          <div className="flex flex-row items-center gap-8 text-4xl justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/shaurya-pratap-singh-5599391b5/"
              target="_blank"
            >
              <FaLinkedin className="p-2 bg-amber-900 rounded-3xl  hover:bg-amber-400 transition-transform hover:scale-105" />
            </a>
            <a
              href="https://github.com/Shauryapratapsingh001?tab=repositories"
              target="_blank"
            >
              {" "}
              <FaSquareGithub className="p-2 bg-amber-900 rounded-3xl  hover:bg-amber-400 transition-transform hover:scale-105" />
            </a>
            <a href="www.google.com">
              {" "}
              <BiLogoGmail className="p-2 bg-amber-900 rounded-3xl  hover:bg-amber-400 transition-transform hover:scale-105" />
            </a>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="flex flex-col items-center justify-center">
        <a
          href="#Home"
          className="bg-amber-600 rounded-3xl p-3 flex flex-row-reverse items-center justify-center gap-3 transition-transform  hover:shadow shadow-2xl shadow-green-500 hover:scale-105"
        >
          <TbArrowBigUp /> Back to Top
        </a>
      </div>
    </section>
  );
};

export default Footer;
