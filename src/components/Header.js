import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  console.log(showNav);
  return (
    <header className="flex justify-between items-center bg-primary text-white font-thin py-3 px-6 relative">
      <div className="">Logo goes here</div>
      <span
        onClick={() => setShowNav((prev) => !prev)}
        className="border md:hidden"
      >
        <GiHamburgerMenu />
      </span>
      <nav
        className={`flex flex-col fixed left-0  items-center  ${
          showNav ? "p-0 h-0" : "p-5"
        } top-12 bg-primary w-screen   gap-5 z-10 md:static md:flex-row md:w-auto `}
      >
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>BootCamp Journey</NavLink>
        <NavLink>Education</NavLink>
        <NavLink>Skills</NavLink>
        <NavLink>Portfolio</NavLink>
      </nav>
      <div className="gap-4 font-normal hidden lg:flex">
        <a
          href="https://www.linkedin.com/in/utpalsangwan/"
          className="flex items-center gap-1  text-secondary  underline "
        >
          <AiOutlineCloudDownload />
          <span>Download CV</span>
        </a>
        <button className="px-6 py-2 bg-secondary text-primary rounded-2xl ">
          Contact Me
        </button>
      </div>
    </header>
  );
};

export default Header;
