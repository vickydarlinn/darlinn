import React from "react";
import PaginationArrows from "../components/PaginationArrows";
import anshu_small_shop from "../assets/anshu_small_shop.png";
import portfolioImage from "../assets/portfolio.png";
import ProjectCard from "../components/ProjectCard";

const PortfolioPage = () => {
  return (
    <section className="flex justify-between flex-col">
      <div className="w-auto ">
        <span className="font-thin text-2xl md:text-4xl">{"<4/>"}</span>
        <h2 className="text-4xl md:text-7xl italic font-light my-10">
          Projects
        </h2>
      </div>
      <div className="flex gap-10 flex-wrap justify-center p-3">
        <ProjectCard
          image={anshu_small_shop}
          liveUrl="https://anshu-small-shop.vercel.app/"
          githubUrl="https://github.com/vickydarlinn/anshuSmallShop"
        />
        <ProjectCard
          image={portfolioImage}
          liveUrl="https://darlinn.vercel.app/"
          githubUrl="https://github.com/vickydarlinn/darlinn"
        />
      </div>

      <PaginationArrows prev="/skills" next="" />
    </section>
  );
};

export default PortfolioPage;
