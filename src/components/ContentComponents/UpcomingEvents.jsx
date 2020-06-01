import React from "react";
import { useStoreState } from "easy-peasy";

import EventBigCard from "./EventBigCard";

const UpcomingEvents = () => {
  const events = useStoreState((state) => state.events.allEvents);
  const upcoming = events.filter((event) => {
    return Date.parse(event.date) >= new Date();
  });

  return (
    <div>
      <h1 className="text-2xl uppercase text-gray-700 mb-4">Upcoming Events</h1>
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
