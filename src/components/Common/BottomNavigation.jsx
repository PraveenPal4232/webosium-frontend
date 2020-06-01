import React from "react";
import { Link } from "react-router-dom";

import { Home, User, Search, Tag } from "react-feather";

const BottomNavigation = () => {
  return (
    <div className="bottomNav fixed bottom-0 w-full bg-white border-t border-gray-200">
      <nav className="md:hidden bottom-0 w-full text-xs">
        <ul className="flex justify-around items-center text-gray-500 text-center opacity-75 text-sm uppercase">
          <Link to="/">
            <li className="p-3">
              <Home className="h-6 w-6 mb-1 mx-auto" />
            </li>
          </Link>

          <Link to="/search">
            <li className="p-3">
              <Search className="h-6 w-6 mb-1 mx-auto" />
            </li>
          </Link>

          <Link to="/topics">
            <li className="p-3">
              <Tag className="h-6 w-6 mb-1 mx-auto" />
            </li>
          </Link>
          
          <Link to="/profile/create">
            <li className="p-3">
              <User className="h-6 w-6 mb-1 mx-auto" />
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default BottomNavigation;
