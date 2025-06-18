import React, { useMemo } from "react";
import { findNthPrime } from "../utils/helper.js";

const Demo = () => {
  const [text, setText] = React.useState(0);
  const [isDarkTheme, setDarkTheme] = React.useState(false);
  const nthPrime = useMemo(() => findNthPrime(text), [text]);

  console.log("Rendering");
  return (
    <div
      className={
        "m-4 p-2 w-100 h-100 border border-gray-300" +
        (isDarkTheme && " bg-black text-white ")
      }
    >
      <div>
        <button
          onClick={() => setDarkTheme(!isDarkTheme)}
          className={
            "bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 p-2"
          }
        >
          Toggle theme
        </button>
      </div>
      <div>
        <input
          className="border border-gray-300 p-2 w-80 rounded-lg my-3 ml-2 "
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="write something here..."
        />
      </div>
      <div>
        <h1 className="text-xl font-bold ml-2">nth Prime: {nthPrime}</h1>
      </div>
    </div>
  );
};

export default Demo;
