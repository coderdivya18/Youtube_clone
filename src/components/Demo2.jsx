import React, { useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;
  const ref = useRef(0);

  return (
    <div className="m-4 p-2 w-100 h-100 border border-gray-300">
      <div className="flex flex-wrap gap-5">
        <button
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
          className="bg-green-600 text-white rounded-md shadow-sm hover:bg-green-700 p-2"
        >
          Increment X
        </button>
        <div>
          <h1 className="text-xl font-bold mt-2">Let value of x : {x}</h1>
        </div>
      </div>

      <div className="mt-4 flex gap-5">
        <button
          onClick={() => {
            setY(y + 1);
          }}
          className="bg-green-600 text-white rounded-md shadow-sm hover:bg-green-700 p-2"
        >
          Increment y
        </button>
        <div>
          <h1 className="text-xl font-bold mt-2">State value of y : {y}</h1>
        </div>
      </div>

      <div className="mt-4 flex gap-5">
        <button
          onClick={() => {
            ref.current += 1;
            console.log("Ref value:", ref.current);
          }}
          className="bg-green-600 text-white rounded-md shadow-sm hover:bg-green-700 p-2"
        >
          Increment ref
        </button>
        <div>
          <h1 className="text-xl font-bold mt-2">Ref value : {ref.current}</h1>
        </div>
      </div>
    </div>
  );
};

export default Demo2;
