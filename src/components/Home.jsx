import React from "react";
import Main from "./Main";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-5/6 flex flex-col">
          <Navbar />
          <Main />
        </div>
      </div>
    </>
  );
}

export default Home;
