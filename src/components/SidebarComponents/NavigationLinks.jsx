import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Home, User, Search, Tag } from "react-feather";

const NavigationLinks = () => {
  const location = useLocation();

  return (
    <ul className="text-sm uppercase text-gray-700">
      <li>
        <Link
          to="/"
          className={`flex items-center mx-4 mt-4 hover:text-blue-700 hover:font-medium ${
            location.pathname === "/" ? "text-blue-700 font-medium" : null
          }`}
        >
          <Home className="mr-4" />
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link
          to="/search"
          className={`flex items-center mx-4 mt-4 hover:text-blue-700 hover:font-medium ${
            location.pathname === "/search" ? "text-blue-700 font-medium" : null
          }`}
        >
          <Search className="mr-4" />
          <span>Search</span>
        </Link>
      </li>
      <li>
        <Link
          to="/topics"
          className={`flex items-center mx-4 mt-4 hover:text-blue-700 hover:font-medium ${
            location.pathname === "/topics" ? "text-blue-700 font-medium" : null
          }`}
        >
          <Tag className="mr-4" />
          <span>Topics</span>
        </Link>
      </li>
      <li>
        <Link
          to="/profile/create"
          className={`flex items-center mx-4 mt-4 hover:text-blue-700 hover:font-medium ${
            location.pathname === "/profile/create"
              ? "text-blue-700 font-medium"
              : null
          }`}
        >
          <User className="mr-4" />
          <span>Profile</span>
        </Link>
      </li>
    </ul>
  );
};

export default NavigationLinks;
