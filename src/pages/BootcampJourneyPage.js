import React from "react";
import PaginationArrows from "../components/PaginationArrows";
import projectImg from "../assets/project.svg";

const BootcampJourneyPage = () => {
  return (
    <section className="flex justify-between flex-col items-center md:flex-row  ">
      <div className="max-w-[80%] flex flex-col lg:flex-row-reverse  gap-10">
        <div className="w-auto lg:w-[35%] static lg:fixed lg:left-20">
          <span className="font-thin text-2xl md:text-4xl">{"<3/>"}</span>
          <h2 className="text-4xl  italic font-light my-3">
            My Bootcamp Journey
          </h2>
          <p className="font-thin">
            In late 2021, I embarked on an exciting web development journey
            fueled by my passion for creating engaging user experiences. I
            enrolled in the Scrimba Frontend Bootcamp, a comprehensive program
            that laid a strong foundation in modern web development practices.
            <br />
            During the bootcamp, I delved into technologies like HTML, CSS, and
            JavaScript, honing my skills in crafting responsive layouts and
            implementing interactive features. To further expand my expertise, I
            also took an advanced frontend course on Udemy, exploring additional
            frameworks and libraries. <br />
            Seeking specialization in React.js, I joined Akshay Saini's Namaste
            React Live Bootcamp—an intensive program immersing me in the
            intricacies of React.js and its ecosystem. Through practical
            assignments, I gained an in-depth understanding of component-based
            architecture, state management, and advanced React.js concepts.
            <br />
            Throughout these bootcamps, I created remarkable projects showcasing
            my ability to design visually appealing and user-friendly web
            applications. My portfolio reflects diverse skills, from crafting
            clean code to effective problem-solving. <br />
            With a strong foundation in frontend development and a passion for
            continuous learning, I am ready to bring my creative ideas to life
            and contribute to exciting projects in the industry.
          </p>
        </div>
        <div className="w-auto lg:w-1/2 mt-20 space-y-10 ">
          <p>
            Here are some of the projects I developed during my bootcamp
            journey:
          </p>
          <div className="border-l-2 border-b-2  border-secondary pl-4 pb-4 ">
            <h4 className="text-center mb-2">devFinder</h4>{" "}
            <img className="text-secondary" src={projectImg} alt="" />
            <p>
              Description: Here I practiced especially two hooks- useEffect,
              useContext.
            </p>
            <a
              className="text-secondary underline"
              href="https://vickydarlinn-frontend-challenges.vercel.app/"
            >
              Live Link
            </a>
          </div>
          <div className="border-l-2 border-b-2  border-secondary pl-4 pb-4 ">
            <h4 className="text-center mb-2">devFinder</h4>{" "}
            <img className="text-secondary" src={projectImg} alt="" />
            <p>
              Description: Here I practiced especially two hooks- useEffect,
              useContext.
            </p>
            <a
              className="text-secondary underline"
              href="https://vickydarlinn-frontend-challenges.vercel.app/"
            >
              Live Link
            </a>
          </div>{" "}
          <div className="border-l-2 border-b-2  border-secondary pl-4 pb-4 ">
            <h4 className="text-center mb-2">devFinder</h4>{" "}
            <img className="text-secondary" src={projectImg} alt="" />
            <p>
              Description: Here I practiced especially two hooks- useEffect,
              useContext.
            </p>
            <a
              className="text-secondary underline"
              href="https://vickydarlinn-frontend-challenges.vercel.app/"
            >
              Live Link
            </a>
          </div>{" "}
          <div className="border-l-2 border-b-2  border-secondary pl-4 pb-4 ">
            <h4 className="text-center mb-2">devFinder</h4>{" "}
            <img className="text-secondary" src={projectImg} alt="" />
            <p>
              Description: Here I practiced especially two hooks- useEffect,
              useContext.
            </p>
            <a
              className="text-secondary underline"
              href="https://vickydarlinn-frontend-challenges.vercel.app/"
            >
              Live Link
            </a>
          </div>
        </div>
      </div>

      <PaginationArrows prev="/about-me" next="/education" />
    </section>
  );
};

export default BootcampJourneyPage;
