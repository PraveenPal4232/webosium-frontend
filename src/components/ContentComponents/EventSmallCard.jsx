import React from "react";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

import TagChip from "./TagChip";

const EventSmallCard = (props) => {
  const { id, name, date, timezone, tags } = props.event;

  return (
    <Link className="p-1" to={`/event/${id}`}>
      <div className="border-b border-gray-400 md:border-none bg-gray-400 hover:bg-blue-400 h-full">
        <div className="px-4 py-3 md:py-6 md:px-4">
          <div className="font-medium text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">
            <span className="font-medium">Date: </span>
            {dateFormat(date, "ddd, mmm d, yyyy, h:MM TT")} {timezone}
          </p>
          <div className="py-2">
            {tags.map((topic, index) => {
              return <TagChip name={topic.name} key={index} />;
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventSmallCard;
