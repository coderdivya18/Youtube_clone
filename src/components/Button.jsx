import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button
        onClick={() => {}}
        className="whitespace-nowrap px-4 py-1 rounded-lg text-sm font-bold bg-gray-100"
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
