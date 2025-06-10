import React from "react";
import Sidebar from "./Sidebar.jsx";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
