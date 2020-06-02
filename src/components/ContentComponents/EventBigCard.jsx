import React from "react";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

import TagChip from "./TagChip";

const EventBigCard = (props) => {
  const { id, name, date, image, timezone, tags } = props.event;

  return (
    <div className="md:w-1/4 w-full mb-4 md:mr-2 md:inline-block md:flex-none">
      <Link to={`/event/${id}`}>
        <div className="rounded overflow-hidden shadow-md hover:shadow-lg cursor-pointer">
          <img
            className="w-full md:h-48 h-56 object-cover"
            src={image}
            alt="event poster"
          />
          <div className="px-4 py-3">
            <div className="flex item-center">
              <div className="font-medium text-xl mb-2 cursor-pointer capitalize">
                {name}
              </div>
            </div>
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

export default EventBigCard;
