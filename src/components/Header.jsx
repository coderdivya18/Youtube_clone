import React, { useEffect, useState } from "react";
import { Bell, Menu, Mic, Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/slice/appSlice.js";
import { YOUTUBE_SEARCH_AUTO_COMPLETE_API } from "../utils/constants.js";
import { cacheResults } from "../utils/slice/searchSlice.js";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  // console.log(suggestions);
  //Auto complete Feature
  useEffect(() => {
    //  console.log(searchQuery);
    //make an api call after every key press , but if the difference between 2 API call is <200ms
    //Decline the API call
    const timer = setTimeout(() => {
      //Check the cache Results
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  //Get auto suggestion api
  const getSearchSuggestions = async () => {
    console.log("APICall- " + searchQuery);
    try {
      const response = await fetch(
        YOUTUBE_SEARCH_AUTO_COMPLETE_API + searchQuery,
      );
      const data = await response.json();
      // console.log(data[1]);
      setSuggestions(data[1]);
      //update cache
      dispatch(
        cacheResults({
          [searchQuery]: data[1],
        }),
      );

      setShowSuggestions(true);
    } catch (e) {
      console.log(e);
    }
  };

  //Toggling sideBar Menu
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
      <div className="flex flex-1 max-w-xl mx-4 relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          placeholder="Search"
          className="w-full p-2 border border-gray-300 rounded-l-full text-sm outline-none focus:ring-1 focus:ring-gray-400"
        />
        <button className="bg-gray-100 p-2 px-4 rounded-r-full border border-l-0 border-gray-300 hover:bg-gray-200">
          <Search className="w-5 h-5" />
        </button>
        <button className="ml-3 bg-gray-100 p-2 rounded-full hover:bg-gray-200">
          <Mic className="w-5 h-5" />
        </button>

        {/*Auto suggestion Part*/}
        {searchQuery && showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-10 z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200">
            {suggestions.map((item, index) => (
              <div
                key={index}
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <Search className="w-4 h-4 mr-3 text-gray-500" />
                <span className="text-sm text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        )}
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
