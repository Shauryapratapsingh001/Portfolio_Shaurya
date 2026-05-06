import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Project from "../Components/Project";
import Experience from "../Components/Experience";
import Education from "../Components/Education";

const Home = () => {
  return (
    <main  id="Home">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Education />
    </main>
  );
};

export default Home;
