import React from "react";
import PaginationArrows from "../components/PaginationArrows";
import projectImg from "../assets/project.svg";
import { projects } from "../data";

const BootcampJourneyPage = () => {
  return (
    <section className="flex justify-between flex-col items-center md:flex-row  ">
      <div className="max-w-[80%] flex flex-col lg:flex-row-reverse  gap-10">
        <div className="w-auto lg:w-[35%] static lg:fixed lg:left-20">
          <span className="font-thin text-2xl md:text-4xl">{"<2/>"}</span>
          <h2 className="text-4xl  italic font-light my-3">
            My Bootcamp Journey
          </h2>
          <p className="font-thin leading-loose">
            In late 2021, I embarked on a web development journey driven by my
            passion for creating engaging user experiences. I completed the
            <strong> Scrimba Frontend Bootcamp</strong> , mastering HTML, CSS,
            and JavaScript, and expanded my knowledge with an advanced frontend
            course on Udemy. Seeking specialization in React.js, I joined the
            intensive Namaste
            <strong> React Live Bootcamp by Akshay Saini</strong> . Through
            practical assignments, I gained expertise in component-based
            architecture, state management, and advanced React.js concepts. I
            showcased my skills by creating visually appealing and user-friendly
            web applications, reflecting my ability to craft clean code and
            solve problems effectively. With a solid foundation and a thirst for
            continuous learning, I'm ready to contribute to exciting industry
            projects.
          </p>
        </div>
        <div className="w-auto lg:w-1/2 mt-20 space-y-10 ">
          <p>
            Here are some of the projects I developed during my bootcamp
            journey:
          </p>
          {projects.map((project) => (
            <div className="border-l-2 border-b-2  border-secondary pl-4 pb-4 ">
              <h4 className="text-center mb-2">{project.name}</h4>{" "}
              <img className="text-secondary" src={projectImg} alt="" />
              <p>
                Description: Here I practiced especially two hooks- useEffect,
                useContext.
              </p>
              <a
                className="text-secondary underline mr-4"
                href={`${project.githubUrl}`}
              >
                Github Link
              </a>
              <a
                className="text-secondary underline"
                href={`${project.liveUrl}`}
              >
                Live Link
              </a>
            </div>
          ))}
        </div>
      </div>

      <PaginationArrows prev="/" next="/education" />
    </section>
  );
};

export default BootcampJourneyPage;
