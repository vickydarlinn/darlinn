import React from "react";
import Header from "./Header";
import SocialHandles from "./SocialHandles";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <SocialHandles />
      <div className="border border-white ml-16 md:ml-40">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
