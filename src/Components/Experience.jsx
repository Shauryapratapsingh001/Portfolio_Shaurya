import React from "react";
import { experienceData } from "../data/ProfileData";

const Experience = () => {
  return (
    <section id="experience" className="w-full min-h-screen text-white p-4 bg-gray-950 text-center scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex-col justify-center">
          <h1 className="text-orange-500 text-5xl mt-10 font-bold ">
            Experience
          </h1>
        </div>
        <div>
          {experienceData && experienceData.length > 0
            ? experienceData.map((exp, index) => (
                <div
                  key={index}
                  className=" bg-gray-900 rounded-2xl gap-15 mt-15 p-8  hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(251,191,36,0.6)] border border-orange-200"
                >
                  <h2 className="text-2xl font-semibold text-orange-500">
                    {exp.role}
                  </h2>
                  <h4 className="text-sm text-gray-300 font-bold">
                    {exp.company}
                  </h4>
                  <p className="text-sm text-orange-500">{exp.duration}</p>
                  <p className="mt-2 mb-5">{exp.description}</p>
                  <a
                    href={exp.internship}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-500/50 p-3 rounded-2xl hover:scale-105 " >
                    {" "}
                    {exp.isInternship && <span>Internship</span>}{" "}
                  </a>
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  );
};

export default Experience;
