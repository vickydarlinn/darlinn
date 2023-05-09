import React from "react";
import PaginationArrows from "../components/PaginationArrows";

const SkillsPage = () => {
  return (
    <section className="flex justify-between flex-col items-center md:flex-row">
      <div className="max-w-[80%] flex flex-col lg:flex-row gap-5">
        <div className="w-auto lg:w-1/2">
          <span className="font-thin text-2xl md:text-4xl">{"<5/>"}</span>
          <h2 className="text-4xl md:text-7xl italic font-light my-10">
            Skills
          </h2>
          <p className="font-thin">
            During my intensive bootcamp journey, I have acquired a robust set
            of skills that empower me to craft exceptional web experiences.
            Through dedicated learning and hands-on projects, I have developed
            expertise in various areas of web development.
          </p>
        </div>
        <div className="w-auto lg:w-1/2 mt-20 space-y-10">
          <div>
            <h3>Programming</h3>
            <p className="font-thin">
              RESTful API, ReactJs, Redux, Vanilla JavaScript ES6+ , SCSS, Sass,
              Tailwind, HTML5, CSS3
            </p>
          </div>
          <div>
            <h3>Web Design</h3>
            <p className="font-thin">
              Responsive Design, Basic UX/UI practices.
            </p>
          </div>
          <div>
            <h3>Tools & Technologies</h3>
            <p className="font-thin">Github, Git, Visual Studio Code, Figma,</p>
          </div>
        </div>
      </div>
      <PaginationArrows prev="/education" next="/portfolio" />
    </section>
  );
};

export default SkillsPage;
