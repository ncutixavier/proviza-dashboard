import React from "react";
import logo from "../assets/logo.png";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <div>
      <div className="flex justify-center items-center my-8">
        <img src={logo} alt="logo" className="w-20 h-20" />
      </div>
      <div className="flex min-h-full md:p-0 p-3 justify-center">
        <div className="min-w-[100%] md:min-w-[70%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayouts;
