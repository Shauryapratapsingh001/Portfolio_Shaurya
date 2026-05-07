import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaDownload } from "react-icons/fa6";
import cv_pdf from "../assets/Updated.pdf";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      id="navbar"
      className="w-full h-20 flex items-center justify-between px-4 sm:px-8 lg:px-25 py-3 bg-gray-950 text-white sticky top-0 z-50"
    >
      {/* Logo */}
      <div>
        <button>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
            ShauryaPratap<span className="text-orange-500">Singh</span>
          </h1>
        </button>
      </div>

      {/* Desktop Menu ONLY */}
      <div className="hidden lg:block">
        <ul className="flex gap-10 cursor-pointer">
          <NavLink
            to="/"
            end
            onClick={() => scrollTo("home")}
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 font-bold border-b-2 border-orange-600"
                : "text-white hover:text-orange-400"
            }
          >
            <li>Home</li>
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => scrollTo("about")}
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 font-bold border-b-2 border-orange-600"
                : "text-white hover:text-orange-400"
            }
          >
            <li>About</li>
          </NavLink>

          <NavLink
            to="/skill"
            onClick={() => scrollTo("skill")}
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-bold border-b-2 border-orange-500"
                : "text-white hover:text-orange-400"
            }
          >
            <li>Skill</li>
          </NavLink>

          <NavLink
            to="/project"
            onClick={() => scrollTo("project")}
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 font-bold border-b-2 border-orange-600"
                : "text-white hover:text-orange-400"
            }
          >
            <li>Project</li>
          </NavLink>

          <NavLink
            to="/experience"
            onClick={() => scrollTo("experience")}
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 font-bold border-b-2 border-orange-600"
                : "text-white hover:text-orange-400"
            }
          >
            <li>Experience</li>
          </NavLink>
        </ul>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        {/* Desktop Button */}
        <a
          href={cv_pdf}
          target="_blank"
          className="max-[400px]:hidden flex items-center bg-amber-300 hover:bg-orange-400 rounded px-2 py-0.5 text-black"
        >
          Download CV <FaDownload />
        </a>

        {/* Hamburger (Mobile + Tablet) */}
        <button
          className="lg:hidden text-3xl rounded-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Drawer (Mobile + Tablet) */}
      {open && (
        <div className="absolute top-16 right-4 sm:right-8 w-56 bg-gray-900 rounded-lg shadow-lg p-5 lg:hidden transition-all duration-300">
          <ul className="flex flex-col gap-4 text-center">
            {[
              { label: "Home", id: "home" },
              { label: "About", id: "about" },
              { label: "Skill", id: "skill" },
              { label: "Project", id: "project" },
              { label: "Experience", id: "experience" },
            ].map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => {
                    scrollTo(id);
                    setOpen(false);
                  }}
                  className="text-white hover:text-orange-400 w-full text-center"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <a
            href={cv_pdf}
            target="_blank"
            className="mt-4 w-full bg-amber-300 hover:bg-orange-400 rounded px-3 py-1 text-black hover:scale-105 flex flex-col justify-center items-center"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

/* import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='w-full h-18 flex items-center justify-between px-20 bg-gray-800 text-white'>
            <div>
                <button><h1 className='text-2xl font-bold'>ShauryaPratap<span className='text-orange-500'>Singh</span></h1></button>
            </div>
            <div>
                <ul className='flex gap-10  cursor-pointer decoration-none'>
                    <NavLink to="/Home" className={({ isActive }) => isActive
                        ? "text-orange-600 font-bold border-b-2 border-orange-600"
                        : "text-white-600 hover:text-orange-400"} ><li>Home</li></NavLink>
                    <NavLink to="/About" className={({ isActive }) => isActive
                        ? "text-orange-600 font-bold border-b-2 border-orange-600"
                        : "text-white-600 hover:text-orange-400"} ><li>About</li></NavLink>
                    <NavLink to="/Skill" className={({ isActive }) => isActive
                        ? "text-oranged-500 font-bold border-b-2 border-oranged-500"
                        : "text-white-600 hover:text-oranged-400"} ><li>Skill</li></NavLink>
                    <NavLink to="Project" className={({ isActive }) => isActive
                        ? "text-orange-600 font-bold border-b-2 border-orange-600"
                        : "text-white-600 hover:text-orange-400"}><li>Project</li></NavLink>
                    <NavLink to="Experience" className={({ isActive }) => isActive
                        ? "text-orange-600 font-bold border-b-2 border-orange-600"
                        : "text-white-600 hover:text-orange-400"}><li>Experience</li></NavLink>
                </ul>
            </div>
            <div>
                <button className='w-full bg-amber-300 hover:bg-orange-400  rounded px-2 py-0.5 border-amber-50 text-black'>Download CV</button>
            </div>

        </nav>
    )
}

export default Navbar */
