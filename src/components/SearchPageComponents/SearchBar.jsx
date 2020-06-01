import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const changeUrl = (value) => {
    setLoading(true);
    if (value === "") {
      history.push(`/search`);
    } else {
      history.push(`/search?title=${value}`);
    }
    setLoading(false);
  };

  return (
    <div className="w-full max-w-lg">
      <div className="relative">
        <span>
          <input
            className="focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal ds-input"
            type="text"
            placeholder="Search webinars by title..."
            style={{ position: "relative", verticalAlign: "top" }}
            onChange={(e) => changeUrl(e.target.value)}
          />
        </span>
        <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
          {loading ? (
            "..."
          ) : (
            <svg
              className="fill-current pointer-events-none text-gray-600 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
