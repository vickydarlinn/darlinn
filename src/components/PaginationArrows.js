import React from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const PaginationArrows = (props) => {
  const { prev, next } = props;
  return (
    <div className="flex flex-col items-center gap-5 justify-center p-3 text-secondary static  md:fixed md:right-3 md:top-1/2 md:translate-y-[-50%]">
      {prev.length ? (
        <Link
          to={prev}
          className="text-xl font-thin border border-secondary rounded-full p-3 cursor-pointer hover:text-primary hover:bg-secondary"
        >
          <BsArrowLeft className="" />
        </Link>
      ) : null}
      {next.length ? (
        <Link to={next} className="flex flex-col items-center font-thin ">
          <BsArrowRight className="text-xl font-thin border border-secondary rounded-full p-3 h-28 w-28 cursor-pointer   hover:text-primary hover:bg-secondary" />
          <span className="capitalize">{next.replace("/", "")}</span>
        </Link>
      ) : null}
    </div>
  );
};

export default PaginationArrows;
