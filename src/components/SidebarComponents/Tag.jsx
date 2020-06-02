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
      <h3 className="text-gray-500 hover:text-black truncate uppercase">{props.name}</h3>
    </Link>
  );
};

export default Tag;
