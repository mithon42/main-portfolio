import React from "react";
import Title from "../layouts/Title";
import ProjectCard from "./projectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="visit my protfolio and keep your feedback"
          subTitle="my projects"
        />
      </div>

      <div className="grid grid-cols-3 gap-14">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}

export default Projects;

// https://www.youtube.com/watch?v=lJ2EBYN0C70&t=3113s
// 11.12 - minutes
