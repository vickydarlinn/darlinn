import React from "react";
import PaginationArrows from "../components/PaginationArrows";

const EducationPage = () => {
  return (
    <section className="flex justify-between">
      <div className="max-w-[80%] flex">
        <div className="w-1/2">
          <span className="font-thin text-2xl md:text-4xl">{"<4/>"}</span>
          <h2 className="text-4xl md:text-7xl italic font-light my-10">
            Education
          </h2>
          <p>
            alongwith my bootcamp Journey, here is the my academic educational
            background.
          </p>
        </div>
        <div className="w-1/2">
          <div>graduation</div>
          <div>12th</div>
          <div>10th</div>
        </div>
      </div>
      <PaginationArrows prev="/my-bootcamp-journey" next="/skills" />
    </section>
  );
};

export default EducationPage;
