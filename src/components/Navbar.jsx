import React from "react";

function Navbar() {
  return (
    <div className="w-full h-[15%] border">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-[500] py-2 px-4 rounded-[2rem]">
        + Add new task
      </button>
    </div>
  );
}

export default Navbar;
