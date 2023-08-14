import React from "react";
import ProjectCard from "../components/ProjectCard";
import PaginationArrows from "../components/PaginationArrows";

import { small_projects } from "../data";

const MiniProjectsPage = () => {
  return (
    <section className="flex justify-between flex-col">
      <div className="w-auto ">
        <span className="font-thin text-2xl md:text-4xl">{"<05/>"}</span>
        <h2 className="text-4xl md:text-7xl italic font-light my-10">
          Mini Projects
        </h2>
      </div>

      <div className="flex gap-10 flex-wrap justify-center p-3">
        {small_projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            name={project.name}
          />
        ))}
      </div>

      <PaginationArrows prev="/portfolio" next="" />
    </section>
  );
};

export default MiniProjectsPage;
