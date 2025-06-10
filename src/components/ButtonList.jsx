import React from "react";
import Button from "./Button.jsx";

const categories = [
  "All",
  "Anup Soni",
  "Music",
  "Computer programming",
  "Web series",
  "Podcasts",
  "Mysteries",
  "Indian soap operas",
  "Wide-body aircrafts",
  "Cockpits",
  "Breakfast",
  "Dinosaurs",
  "Kitchens",
  "Live",
];

const ButtonList = () => {
  return (
    <div className="flex overflow-x-auto gap-3 px-4 py-2 mt-4 scrollbar-hide">
      {categories.map((category, index) => (
        <Button
          key={index}
          className="flex items-center justify-center w-full"
          name={category}
        />
      ))}
    </div>
  );
};

export default ButtonList;
