import React from "react";

function Sidebar() {
  return (
    <div className="box-border h-screen  w-1/5 border">
      <header className="mb-2 p-2 text-center">Taskify</header>
      <div className="ml-0">
        <p className="ml-3 text-xs uppercase">All Projects</p>
        <div className="mt-3 text-sm">
          <div className="bg-blue-500 hover:bg-blue-700 h-[45px] max-w-[90%] no-scrollbar flex items-center justify-center p- overflow-x-scroll  border rounded-r-[50px] mb-1">
            Platform LAunch
          </div>
          <div className="h-[45px] max-w-[90%] no-scrollbar flex items-center justify-center p- overflow-x-scroll  border rounded-r-[50px] mb-1">
            MArketing Plan
          </div>
          <div className="h-[45px] max-w-[90%] no-scrollbar flex items-center justify-center p- overflow-x-scroll  border rounded-r-[50px] mb-1">
            Roadmap
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
