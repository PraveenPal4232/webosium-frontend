import React from "react";
import { useStoreState } from "easy-peasy";
import { Link } from "react-router-dom";

import EventSmallCard from "./EventSmallCard";

const PastEvents = () => {
  const events = useStoreState((state) => state.events.allEvents);
  const past = events.filter((event) => {
    let myDate = new Date();
    myDate.setHours(myDate.getHours() - 4);
    return Date.parse(event.date) < myDate;
  });

  return (
    <div className="mt-8">
      <h1 className="text-2xl uppercase mb-4">Past Events</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2">
        {past.length === 0 ? "No Past Events" : null}
        {past.reverse().map((event, index) => {
          return <EventSmallCard event={event} key={index} />;
        })}
      </div>
      {past.length !== 0 ? (
        <Link
          className="mt-4 text-blue-600 font-medium md:float-left float-right"
          to="/all"
        >
          SEE ALL
        </Link>
      ) : null}
    </div>
  );
};

export default PastEvents;
