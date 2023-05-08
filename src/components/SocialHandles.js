import React from "react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const SocialHandles = () => {
  return (
    <div className="absolute left-3 top-1/4 sm:top-2/4 text-4xl translate-y-[-50%] flex flex-col gap-5 text-secondary">
      <a href="vicky.com">
        <AiOutlineGithub />
      </a>
      <a href="vicky.com">
        <AiFillLinkedin />
      </a>
      <a href="vicky.com">
        <AiOutlineTwitter />
      </a>
    </div>
  );
};

export default SocialHandles;
