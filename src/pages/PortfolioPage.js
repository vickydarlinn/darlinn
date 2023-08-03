import React from "react";
import PaginationArrows from "../components/PaginationArrows";
import ProjectCard from "../components/ProjectCard";

// images
import anshu_small_shop from "../assets/anshu_small_shop.png";
import portfolioImage from "../assets/portfolio.png";
import todo_react from "../assets/todo_react.png";
import color_generator from "../assets/color_generator.png";
import movie_watchlist from "../assets/movie_watchlist.png";
import car_collection from "../assets/car_collection.png";

const PortfolioPage = () => {
  return (
    <section className="flex justify-between flex-col">
      <div className="w-auto ">
        <span className="font-thin text-2xl md:text-4xl">{"<04/>"}</span>
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
        <ProjectCard
          image={todo_react}
          githubUrl="https://github.com/vickydarlinn/todo-react-app"
          liveUrl="https://todo-react-app-topaz.vercel.app/"
        />
        <ProjectCard
          image={color_generator}
          githubUrl="https://github.com/vickydarlinn/color-scheme-generator"
          liveUrl="https://color-scheme-generator-vickydarlinn.netlify.app/"
        />
        <ProjectCard
          image={movie_watchlist}
          githubUrl="https://github.com/vickydarlinn/Movie-watchlist"
          liveUrl="https://movie-watchlist-vickydarlinn.netlify.app/"
        />
        <ProjectCard
          image={car_collection}
          githubUrl="https://github.com/vickydarlinn/redux_learning"
          liveUrl="https://redux-learning-one.vercel.app/"
        />
      </div>

      <PaginationArrows prev="/skills" next="" />
    </section>
  );
};

export default PortfolioPage;
