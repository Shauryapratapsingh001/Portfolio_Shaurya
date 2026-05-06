import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            {/* All sections live on the single home page */}
            <Route path="/" element={<Home />} />
            {/* Catch-all: redirect unknown routes back to home */}
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

{
  /* <p className="text-gray-300 font-semibold text-base md:text-lg leading-relaxed text-center md:text-left max-w-xl">
          I am a passionate
          <span className="text-blue-500 font-semibold">
            {" "}
            MERN Stack Developer and Prompt Engineer{" "}
          </span>
          with experience building responsive and scalable web applications. I
          specialize in developing full-stack solutions using **{" "}
          <span className="text-blue-500 font-semibold">
            React.js, and Node.js
          </span>
          **, along with working knowledge of **MySQL** for relational database
          management.
          <br />
          <br />
          During my **
          <span className="text-blue-500 font-semibold">
            Full Stack Web Development Internship at SpeakingFever
          </span>
          **, I worked on building responsive frontend modules and developing
          backend APIs using modern JavaScript technologies. This experience
          helped me strengthen my skills in creating efficient and user-friendly
          applications.
          <br />
          <br />I have also completed coursework from **
          <span className="text-blue-500 font-semibold">Great learning</span>**,
          gaining hands-on experience in database management, data modeling, and
          backend optimization.
          <br />
          <br />I enjoy solving real-world problems, learning new technologies,
          and building modern applications that deliver scalable and meaningful
          user experiences....
        </p> */
}
