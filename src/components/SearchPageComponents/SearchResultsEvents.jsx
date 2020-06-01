import React from "react";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

import TagChip from "../ContentComponents/TagChip";

const SearchResultEvents = (props) => {
  const { id, name, date, image, timezone, tags } = props.event;
  return (
    <div className="w-full mb-4 mr-4 md:inline-block md:flex-none md:px-2">
      <Link to={`event/${id}`}>
        <div className="rounded overflow-hidden shadow-md">
          <img
            className="w-full md:h-48 h-56 object-cover"
            src={image}
            alt="event poster"
          />
          <div className="px-4 py-3">
            <div className="font-medium text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base">
              <span className="font-medium">Date: </span>
              {dateFormat(date, "ddd, mmm d, yyyy")}
            </p>
            <p className="text-gray-700 text-base">
              <span className="font-medium">Time: </span>{" "}
              {dateFormat(date, "h:MM TT")} {timezone}
            </p>
          </div>
          <div className="px-4 py-2 mb-2">
            {tags.map((topic, index) => {
              return <TagChip name={topic.name} key={index} />;
            })}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchResultEvents;
