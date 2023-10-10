import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectThree, projectTwo } from "../../assets";

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
        <ProjectsCard
          title="social media clone"
          imgSrc={projectOne}
          alt="image-1"
        />
        <ProjectsCard
          title="e-commerce website"
          imgSrc={projectTwo}
          alt="image-2"
        />
        <ProjectsCard
          title="chating apps"
          imgSrc={projectThree}
          alt="image-3"
        />
        <ProjectsCard
          title="portfolio website"
          imgSrc={projectTwo}
          alt="image-4"
        />
        <ProjectsCard
          title="e-commerce website"
          imgSrc={projectThree}
          alt="image-5"
        />
        <ProjectsCard title="chating apps" imgSrc={projectOne} alt="image-6" />
      </div>
    </section>
  );
}

export default Projects;

// https://www.youtube.com/watch?v=lJ2EBYN0C70&t=3113s
// 11.12 - minutes
