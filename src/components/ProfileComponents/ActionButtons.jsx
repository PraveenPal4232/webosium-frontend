import React from "react";
import { Link, useLocation } from "react-router-dom";

const ActionButtons = () => {
  const location = useLocation();

  return (
    <div className="md:max-w-md bg-white border-b border-gray-200">
      <nav className="bottom-0 w-full text-xs">
        <ul className="flex max-w-sm md:max-w-md flex-wrap justify-around items-center text-gray-700 text-center text-sm uppercase">
          <Link to="create">
            <li
              className={`p-3 ${
                location.pathname === "/profile/create"
                  ? "border-b-4 border-gray-400"
                  : null
              }`}
            >
              <p>Create</p>
            </li>
          </Link>

          <Link to="pending">
            <li
              className={`p-3 ${
                location.pathname === "/profile/pending"
                  ? "border-b-4 border-gray-400"
                  : null
              }`}
            >
              <p>Pending</p>
            </li>
          </Link>

          <Link to="approved">
            <li
              className={`p-3 ${
                location.pathname === "/profile/approved"
                  ? "border-b-4 border-gray-400"
                  : null
              }`}
            >
              <p>Approved</p>
            </li>
          </Link>

          <Link to="rejected">
            <li
              className={`p-3 ${
                location.pathname === "/profile/rejected"
                  ? "border-b-4 border-gray-400"
                  : null
              }`}
            >
              <p>Rejected</p>
            </li>
          </Link>

          <Link to="topics">
            <li
              className={`p-3 ${
                location.pathname === "/profile/topics"
                  ? "border-b-4 border-gray-400"
                  : null
              }`}
            >
              <p>Topics</p>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default ActionButtons;
