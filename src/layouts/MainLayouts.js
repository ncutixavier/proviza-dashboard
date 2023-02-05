import React from "react";
import logo from "../assets/logo.png";
import { Outlet, useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";

const MainLayouts = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await firebase.auth().signOut();
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="bg-slate-100 min-h-[100vh]">
      <div className="flex justify-between items-center py-8 md:px-32 px-4">
        <img src={logo} alt="logo" className="w-14 h-14" />
        <button
          onClick={handleLogout}
          type="button"
          className="text-violet-700 border bg-white hover:text-white hover:bg-violet-800 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
        >
          Logout
        </button>
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
