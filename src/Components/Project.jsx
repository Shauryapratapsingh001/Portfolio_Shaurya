import React from "react";
import ProjectCard from "./ProjctCard";
import { projectsData } from "../data/ProfileData";

const Project = () => {
  return (
    <section id="project" className="w-full min-h-screen text-white p-4 bg-gray-950 text-center scroll-mt-20">
      <div>
        <div className="flex-col justify-center mt-10">
          <h1 className="text-orange-500 text-5xl mt-10 font-bold ">
            Projects
          </h1>
          <p className="text-xl  text-white mt-7">
            A showcase of the projects I have worked on, highlighting my skills
            and experience in various technologies
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 mt-15">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            projectStatus={project.projectStatus}
            statusText={project.statusText}
            progress={project.progress}
            showStatus={project.showStatus}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
