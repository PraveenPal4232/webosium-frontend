import React from "react";
import { Link } from "react-router-dom";

const TagChip = (props) => {
  return (
    <Link
      to={{
        pathname: "/search",
        search: `?tags=${props.name}`,
      }}
    >
      <span className="inline-block bg-gray-200 hover:bg-gray-300 rounded-md px-2 py-1 text-xs text-gray-700 mr-1 cursor-pointer">
        {props.name}
      </span>
    </Link>
  );
};

export default TagChip;
