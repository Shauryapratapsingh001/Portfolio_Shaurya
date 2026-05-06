import React from "react";

const ProjectCard = ({
  title,
  description,
  image,
  technologies = [],
  githubLink,
  liveLink,
  projectStatus,
  statusText,
  progress,
  showStatus,
}) => {
  return (
    <div className=" bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden hover:scale-105 p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(251,191,36,0.6)]">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-80 object-cover rounded-2xl"
      />

      <div className="p-4">
        {/* Title */}
        <h2 className="text-xl font-bold text-orange-500">{title}</h2>

        {/* Description */}
        <p className="text-sm text-gray-400 mt-2">{description}</p>

        {/* 🔥 STATUS SECTION */}
        <div className="bg-gray-800 rounded-2xl p-3  mt-3 m-2">
          {showStatus && (
            <div className="mt-6">
              {/* Status Badge */}
              <span
                className={`px-2 py-1 text-xs rounded 
              ${projectStatus === "Under Development" ? "bg-yellow-500" : ""}
              ${projectStatus === "Completed" ? "bg-green-500" : ""}
              ${projectStatus === "In Progress" ? "bg-blue-500" : ""}
            `}
              >
                {projectStatus}
              </span>

              {/* Status Text */}
              {statusText && (
                <p className="text-xs text-gray-400 mt-1">{statusText}</p>
              )}

              {/* Progress Bar */}
              {typeof progress === "number" && (
                <div className="mt-2">
                  <div className="w-full bg-gray-700 h-2 rounded">
                    <div
                      className="bg-green-400 h-2 rounded"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs mt-1">{progress}% completed</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-3  ">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 transparent px-4 py-2 text-xs rounded-xl"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-7 ">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-400 bg-orange-500 hover:bg-amber-800 p-3 rounded-2xl"
            >
              GitHub
            </a>
          )}

          {/* 🔥 Smart Live Button Logic */}
          {!liveLink && showStatus ? (
            <button
              disabled
              className="text-gray-500 cursor-not-allowed bg-green-500 hover:bg-green-700 p-3 rounded-2xl"
            >
              Coming Soon
            </button>
          ) : (
            liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black bg-green-500  hover:bg-green-700 p-3 rounded-2xl text-center items-center"
              >
                Live
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
