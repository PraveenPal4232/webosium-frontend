import React from "react";

const TagChip = (props) => {
  return (
    <span className="inline-block bg-gray-200 rounded-md px-2 py-1 text-xs text-gray-700 mr-1 cursor-pointer">
      {props.name}
    </span>
  );
};

export default TagChip;
