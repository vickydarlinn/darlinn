import React from "react";
import PaginationArrows from "../components/PaginationArrows";

const EducationPage = () => {
  return (
    <section className="flex justify-between flex-col md:flex-row ">
      <div className="max-w-[80%] flex mx-auto flex-col md:flex-row gap-3">
        <div className="w-auto lg:w-1/2">
          <span className="font-thin text-2xl md:text-4xl">{"<02/>"}</span>
          <h2 className="text-4xl md:text-7xl italic font-light my-10">
            Education
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
            <br /> Alongwith my bootcamp Journey, here is the my academic
            educational background.
          </p>
        </div>
        <div className="w-auto lg:w-1/2 ml-auto mt-20">
          <div className="border-l flex flex-col gap-1 border-secondary relative font-thin p-4 ">
            <div className=" border border-secondary w-3 h-3 absolute left-0 top-0 translate-x-[-50%] translate-y-[-50%] bg-secondary rounded-full"></div>
            <span className="font-light">2018</span>
            <p className="font-bold">Metriculation</p>
            <span>GKG Sr. Sec. School</span>
            <div className="border-b my-3 border-white w-2/4"></div>
            <p>
              I have completed my matric with <strong>10CGPA</strong> alongwith
              that I held 1st position in Internationl Maths Olympiad at school
              level.
            </p>
          </div>
          <div className="border-l flex flex-col gap-1 border-secondary relative font-thin p-3 ">
            <div className=" border border-secondary w-3 h-3 absolute left-0 top-0 translate-x-[-50%] translate-y-[-50%] bg-secondary rounded-full"></div>
            <span className="font-light">2020</span>
            <p className="font-bold">Intermediate</p>
            <span>GKG Sr. Sec. School</span>
            <div className="border-b my-3 border-white w-2/4"></div>
            <p>
              I have completed my intermediate with <strong>93%.</strong>{" "}
            </p>
          </div>{" "}
          <div className="border-l flex flex-col  border-secondary relative font-thin p-3 ">
            <div className=" border border-secondary w-3 h-3 absolute left-0 top-0 translate-x-[-50%] translate-y-[-50%] bg-secondary rounded-full"></div>
            <span className="font-light">2023</span>
            <p className="font-bold">Graduation, B.Sc(H) Mathematics</p>
            <span>Rmajas College, University of Delhi.</span>
            <div className="border-b my-3 border-white w-2/4"></div>
            <p>-----</p>
          </div>
        </div>
      </div>
      <PaginationArrows prev="/" next="/skills" />
    </section>
  );
};

export default EducationPage;
