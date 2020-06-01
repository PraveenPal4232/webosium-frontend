import React from "react";

import NavigationLinks from "../SidebarComponents/NavigationLinks";
import TagList from "../SidebarComponents/TagList";

const SideBar = () => {
  return (
    <div className="hidden md:block w-48 flex-none">
      <NavigationLinks />
      <TagList />
    </div>
  );
};

export default SideBar;
