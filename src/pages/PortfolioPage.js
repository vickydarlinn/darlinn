import React from "react";
import PaginationArrows from "../components/PaginationArrows";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

const PortfolioPage = () => {
  return (
    <section className="flex justify-between flex-col">
      <div className="w-auto ">
        <span className="font-thin text-2xl md:text-4xl">{"<04/>"}</span>
        <h2 className="text-4xl md:text-7xl italic font-light my-10">
          Projects
        </h2>
      </div>

      <div className="flex gap-10 flex-wrap justify-center items-start p-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            name={project.name}
          />
        ))}
      </div>

      <PaginationArrows prev="/skills" next="" />
    </section>
  );
};

export default PortfolioPage;
