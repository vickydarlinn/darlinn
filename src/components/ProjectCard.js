import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProjectCard = (props) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div
      className="relative max-w-[500px] "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <LazyLoadImage
        className="inline-block"
        src={props.image}
        alt={props.liveUrl}
        effect="blur"
      />
      {hovered && (
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col gap-4 items-center justify-center">
          <div className="text-white text-center">
            <a
              href={props.liveUrl}
              className="px-4 py-2 bg-primary hover:bg-secondary rounded-md mx-2"
            >
              Live Link
            </a>
            <a
              href={props.githubUrl}
              className="px-4 py-2 bg-primary hover:bg-secondary rounded-md mx-2"
            >
              Github Link
            </a>
          </div>
          <div>{props.name}</div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
