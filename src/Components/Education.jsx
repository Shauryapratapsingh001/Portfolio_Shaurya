import React from "react";
import img from "../assets/mark.jpg";
import { educationData } from "../data/ProfileData";
import { FaUserGraduate } from "react-icons/fa";

const Education = () => {
  /* const handleViewDegree = (degreeFile) => {
    window.open(degreeFile, "_blank");
  }; */

  return (
    <section id="education" className="w-full min-h-screen bg-gray-950 text-white p-4 scroll-mt-20">
      <div className="flex flex-col items-center mb-15">
        <h1 className="text-orange-500 text-4xl sm:text-5xl mt-10  font-bold text-center">
          Education
        </h1>

        <div className="flex flex-col gap-6 mt-16 w-full max-w-3xl">
          {educationData && educationData.length > 0
            ? educationData.map((education, index) => (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden border border-amber-400 flex flex-col sm:flex-row min-w-0"
                >
                  {/* Left: blurred bg + content */}
                  <div className="relative flex flex-col justify-between gap-4 p-6 sm:p-12 flex-1 min-w-0 min-h-72 sm:min-h-96">
                    {/* Blurred background */}
                    <img
                      src={img}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover scale-110 blur-md"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gray-900/70" />

                    {/* Text content */}
                    <div className="relative z-10 space-y-3">
                      <h2 className="text-amber-400 font-bold text-xl sm:text-2xl leading-snug">
                        {education.degree}
                      </h2>
                      <p className="text-gray-300 text-sm">
                        {education.institution}
                      </p>
                      <p className="text-green-500 text-sm font-bold">
                        {education.duration}
                      </p>
                      {education.details && (
                        <p className="text-gray-200 text-sm">
                          {education.details}
                        </p>
                      )}
                    </div>

                    {/* Badge button */}
                    <a
                      className="relative z-10 flex items-center gap-2 bg-purple-700 hover:bg-purple-600 px-4 py-2 text-white text-sm font-semibold rounded-full w-fit transition-transform hover:scale-105"
                      href={education.degreeFile}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaUserGraduate />
                      {education.score} Degree
                    </a>
                  </div>

                  {/* Right: bookshelf image */}
                  <img
                    src={img}
                    alt="loading"
                    className="h-72 sm:h-auto sm:w-5/12 sm:min-h-96 object-cover shrink-0"
                  />
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  );
};

export default Education;

/* import React from "react";
import img from "../assets/mark.jpg";
import { educationData } from "../data/ProfileData";
import { FaUserGraduate } from "react-icons/fa";

const Education = () => {
  return (
    <section className="w-full min-h-screen text-white p-4 bg-gray-950 text-center">
      <div>
        <div className="flex-col justify-center">
          <h1 className="text-orange-500 text-5xl mt-10 font-bold ">
            Education
          </h1>
        </div>
        <div  className="flex flex-col sm:flex-col md:flex-row   items-center justify-center mt-20  ">
           <img className="w-100 h-100" src={img} alt="loading... " /> 
          <div className="flex flex-col">
            {educationData && educationData.length > 0
              ? educationData.map((education, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/80 w-100 h-100  p-4 text-left py-10 space-y-6 border border-amber-400" >
                    <h2 className="text-2xl font-semibold text-orange-500">
                      {education.degree}
                    </h2>
                    <p className="text-sm text-gray-300">
                      {education.institution}
                    </p>
                    <p className="text-sm font-bold text-green-600">{education.duration}</p>
                    <p className="mt-2 text-gray-200">{education.details}</p>
                    <button className="flex flex-row justify-center gap-2 bg-amber-500 px-4 py-3 text-black font-bold rounded-2xl shadow-2xl shadow-amber-50 hover:scale-105 "><FaUserGraduate/>{education.score}            Degree</button>
                  </div>
                  
                ))
              : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
 */
