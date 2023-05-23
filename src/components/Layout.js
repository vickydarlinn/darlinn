import React from "react";
import Header from "./Header";
import SocialHandles from "./SocialHandles";
import { Outlet } from "react-router-dom";
import PaginationArrows from "./PaginationArrows";

const Layout = () => {
  return (
    <>
      <Header />
      <SocialHandles />
      <div className="mt-12 md:mt-20 ml-16 md:ml-40 ">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
