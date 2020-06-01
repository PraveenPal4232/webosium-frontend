import React from "react";
import SideBar from "./SideBar";
import Content from "./Content";

const MainContainer = () => {
  return (
    <div className="mt-16 mb-16 flex">
      <SideBar />
      <Content />
    </div>
  );
};

export default MainContainer;
