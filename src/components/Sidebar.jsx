import React from "react";
import { GrProjects } from "react-icons/gr";
function Sidebar() {
  return (
    <div className="box-border h-scrren  w-1/5 border">
      <header className="mb-2 p-2 text-center">Taskify</header>
      <div className="ml-0">
        <p className="ml-3 text-xs uppercase">All Projects</p>
        <div className="mt-3 text-sm">
          <div className="bg-blue-500 hover:bg-blue-700 h-[50px] max-w-[90%] no-scrollbar flex items-center justify-start pl-7 overflow-x-scroll  border rounded-r-[50px] mb-1">
            <GrProjects className="mr-2" />
            Platform LAunch
          </div>
          <div className="h-[50px] max-w-[90%] no-scrollbar flex items-center justify-start pl-7 overflow-x-scroll  border rounded-r-[50px] mb-1">
            <GrProjects className="mr-2" />
            MArketing Plan
          </div>
          <div className="h-[50px] max-w-[90%] no-scrollbar flex items-center justify-start pl-7 overflow-x-scroll  border rounded-r-[50px] mb-1">
            <GrProjects className="mr-2" />
            Roadmap
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
