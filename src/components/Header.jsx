import React from "react";
import { Bell, Menu, Mic, Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/slice/appSlice.js";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="flex justify-between items-center p-2 px-4 sticky top-0 bg-white z-50">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <Menu
          className="w-6 h-6 cursor-pointer "
          onClick={() => toggleMenuHandler()}
        />
        <div className="flex items-center space-x-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube Logo"
            className="h-6"
          />
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-1 max-w-xl mx-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border border-gray-300 rounded-l-full text-sm outline-none focus:ring-1 focus:ring-gray-400"
        />
        <button className="bg-gray-100 p-2 px-4 rounded-r-full border border-l-0 border-gray-300 hover:bg-gray-200">
          <Search className="w-5 h-5" />
        </button>
        <button className="ml-3 bg-gray-100 p-2 rounded-full hover:bg-gray-200">
          <Mic className="w-5 h-5" />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <button className="bg-gray-100 p-2 px-4 rounded-full hover:bg-gray-200 text-sm">
          + Create
        </button>
        <div className="relative">
          <Bell className="w-5 h-5 cursor-pointer" />
          <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] rounded-full px-1">
            9+
          </span>
        </div>
        <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold">
          d
        </div>
      </div>
    </header>
  );
};

export default Header;
