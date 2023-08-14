import React from "react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const SocialHandles = () => {
  return (
    <div className="fixed left-3 top-1/4 sm:top-2/4 text-4xl translate-y-[-50%] flex flex-col gap-5 text-secondary">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/vickydarlinn/"
        className="hover:text-white"
      >
        <AiOutlineGithub />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/utpalsangwan/"
        className="hover:text-white"
      >
        <AiFillLinkedin />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/utpalsangwan"
        className="hover:text-white"
      >
        <AiOutlineTwitter />
      </a>
    </div>
  );
};

export default SocialHandles;
