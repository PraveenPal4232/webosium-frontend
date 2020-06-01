import React from "react";
import { Link } from "react-router-dom";

const Tag = (props) => {
  return (
    <Link
      to={{
        pathname: "/search",
        search: `?tags=${props.name}`,
      }}
    >
      <div className="p-4 bg-teal-500 m-2 rounded-md text-white uppercase truncate center hover:bg-teal-400 cursor-pointer">
        {props.name}
      </div>
    </Link>
  );
};

export default Tag;
