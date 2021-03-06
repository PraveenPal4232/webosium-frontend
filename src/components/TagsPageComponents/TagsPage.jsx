import React, { useEffect } from "react";
import TagList from "./TagList";
import ReactGa from "react-ga";

const TagsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGa.pageview("/tags");

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1 className="text-2xl uppercase text-gray-700 mb-4">
        Browse All Topics
      </h1>
      <TagList />
    </div>
  );
};

export default TagsPage;
