import React from "react";
import { useStoreState } from "easy-peasy";

import EventBigCard from "./EventBigCard";
import { Link } from "react-router-dom";

const UpcomingEvents = () => {
  const events = useStoreState((state) => state.events.allEvents);
  const upcoming = events.filter((event) => {
    let myDate = new Date();
    myDate.setHours(myDate.getHours() - 4);
    return Date.parse(event.date) >= myDate;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl uppercase text-gray-700">Upcoming Events</h1>
        <Link to="/profile/create">
          <button className="hover:text-blue-500">+ Add New</button>
        </Link>
      </div>
      <div className="flex flex-wrap md:flex-no-wrap md:pl-2 md:overflow-x-scroll custom-scrollbar">
        {upcoming.length === 0 ? "No Upcoming Events" : null}
        {upcoming.map((event, index) => {
          return <EventBigCard event={event} key={index} />;
        })}
      </div>
    </div>
  );
};

export default UpcomingEvents;
