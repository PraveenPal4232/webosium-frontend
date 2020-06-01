import React, { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

import { fetchPublicEvents } from "../../services/eventsService";
import EventSmallCard from "./EventSmallCard";

const AllEventsEver = () => {
  const setEvents = useStoreActions((action) => action.events.setEvents);
  const events = useStoreState((state) => state.events.allEvents);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      const events = await fetchPublicEvents();
      setEvents(events);
    };
    if (events.length === 0) {
      fetchData();
    }
    //eslint-disable-next-line
  }, []);

  return (
    <div className="mt-8">
      <h1 className="text-2xl uppercase mb-4">All Events</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2">
        {events.length === 0 ? "No Events" : null}
        {events.map((event, index) => {
          return <EventSmallCard event={event} key={index} />;
        })}
      </div>
    </div>
  );
};

export default AllEventsEver;
