import React, { useEffect } from "react";
import ReactGa from "react-ga";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGa.pageview("/404");

    // eslint-disable-next-line
  }, []);

  return (
    <div className="w-full h-64 flex justify-center items-center">
      <h2 className="text-3xl flex items-center justify-between flex-col text-center text-gray-600">
        Oops...404! Could not find the page you are looking for!
      </h2>
    </div>
  );
};

export default NotFound;
