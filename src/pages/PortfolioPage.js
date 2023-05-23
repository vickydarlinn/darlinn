import React from "react";
import PaginationArrows from "../components/PaginationArrows";

const PortfolioPage = () => {
  return (
    <section className="flex justify-between">
      <div className="max-w-[80%]">
        <span className="font-thin text-2xl md:text-4xl">{"<5/>"}</span>
        <h2 className="text-4xl md:text-7xl italic font-light my-10">
          Portfolio
        </h2>
        <div></div>
      </div>
      <PaginationArrows prev="/skills" next="" />
    </section>
  );
};

export default PortfolioPage;
