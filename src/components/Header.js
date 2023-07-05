import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Header = () => {
  const [showNav, setShowNav] = useState(true);
  return (
    <header className="flex justify-between items-center bg-primary text-white font-thin py-3 px-6 fixed top-0 w-screen z-10">
      <Link to="/" className="font-bold">
        vickyDarlinn
      </Link>
      <span onClick={() => setShowNav((prev) => !prev)} className=" md:hidden">
        {showNav ? <GiHamburgerMenu /> : <ImCross />}
      </span>
      <nav
        className={`flex flex-col fixed left-0  items-center   ${
          showNav ? "p-0 h-0 overflow-hidden" : "p-5"
        } top-12 bg-primary w-screen   gap-5 z-10 md:static md:flex-row md:w-auto md:overflow-auto md:h-auto `}
      >
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-secondary" : null)}
        >
          Home
        </NavLink>

        <NavLink
          to="my-bootcamp-journey"
          className={({ isActive }) => (isActive ? "text-secondary" : null)}
        >
          BootCamp Journey
        </NavLink>
        <NavLink
          to="education"
          className={({ isActive }) => (isActive ? "text-secondary" : null)}
        >
          Education
        </NavLink>
        <NavLink
          to="skills"
          className={({ isActive }) => (isActive ? "text-secondary" : null)}
        >
          Skills
        </NavLink>
        <NavLink
          to="portfolio"
          className={({ isActive }) => (isActive ? "text-secondary" : null)}
        >
          Portfolio
        </NavLink>
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
