import React from "react";

const Nav = () => {
  return (
    <div className="bg-white/25 backdrop-blur-lg p-2 flex  item-center justify-between">
      <li className="bg-rose-800 p-2 px-4 text-white rounded-3xl hover:bg-rose-700 shadow-black shadow-md font-bold">
        Tasks
      </li>
      <ul className="flex gap-3 m-1 cursor-pointer mr-4">
        <li className="bg-rose-600 p-2 px-4 hover:text-white rounded-xl hover:bg-rose-700 hover:shadow-black hover:shadow-md">
          Home
        </li>
        <li className="bg-rose-600 p-2 px-4 hover:text-white rounded-xl hover:bg-rose-700 hover:shadow-black hover:shadow-md">
          Contact
        </li>
        <li className="bg-rose-600 p-2 px-4 hover:text-white rounded-xl hover:bg-rose-700 hover:shadow-black hover:shadow-md">
          About
        </li>
      </ul>
    </div>
  );
};

export default Nav;
