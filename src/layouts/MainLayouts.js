import React from "react";
import logo from "../assets/logo.png";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <div className="bg-slate-100 min-h-[100vh]">
      <div className="flex justify-center items-center py-5">
        <img src={logo} alt="logo" className="w-20 h-20" />
      </div>
      <div className="min-h-full md:p-0 p-3 justify-center">
        <div className="md:px-32 px-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayouts;
