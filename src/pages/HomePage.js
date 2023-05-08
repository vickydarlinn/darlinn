import React from "react";
import PaginationArrows from "../components/PaginationArrows";
import profileImg from "../assets/profile_pic.jpeg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="flex justify-between flex-col items-center md:flex-row">
      <div className="max-w-[80%] flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 mt-5 md:mt-40">
          <span className="font-thin text-2xl md:text-4xl">{"<01/>"}</span>
          <h2 className="text-4xl md:text-7xl italic font-light my-10">
            Welcome, I'm <br />
            <span className="border-b ">Utpal Sangwan</span>
          </h2>
          <p className="font-thin">
            I’m a frontend developer from New Delhi, with good experience in web
            design and development. I love the connection between design and
            technology, which is reflected in my design approach and vision.
          </p>
          <Link
            to="/about-me"
            className="underline text-secondary inline-block"
          >
            Learn more
          </Link>
        </div>
        <div className="w-full lg:w-1/2">
          <img src={profileImg} alt="" className="w-full" />
        </div>
      </div>
      <PaginationArrows prev="" next="/about-me" />
    </section>
  );
};

export default HomePage;
