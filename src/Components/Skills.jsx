import React from "react";
import { skillsData } from "../data/ProfileData";

const Skills = () => {
  return (
    <section
      id="skill"
      className="w-full min-h-screen text-white p-4 bg-gray-950  text-center scroll-mt-20 "
    >
      <div className="flex flex-col items-center justify-start ">
        <div className="flex-col justify-center">
          <h1 className="text-orange-500 text-5xl mt-10 font-bold mb-7 ">
            Skills
          </h1>
          <p className="text-xl  text-white">
            A collection of my technical skills and expertise honed through
            various projects and experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 ">
          {Object.keys(skillsData).map((item, index) => (
            <div
              key={index}
              className=" bg-gray-900 rounded-2xl px-20 py-10 shadow hover:shadow-lg shadow-amber-500 transition-all duration-200"
            >
              <h2 className="text-xl font-bold text-orange-500 mt-4 mb-6">
                {item}
              </h2>

              <div className="flex flex-wrap gap-2 justify-center">
                {skillsData[item].map((skill, idx) => (
                  <div key={idx} className="bg-gray-900 hover:scale-105  ">
                    <p className="text-white text-center cursor-pointer bg-black rounded-full px-4 py-3 border-2 hover:border-amber-500 transition-all duration-500 whitespace-nowrap">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
