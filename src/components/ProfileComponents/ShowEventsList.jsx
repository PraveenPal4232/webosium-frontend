import React, { useEffect, useState } from "react";
import ShowEvents from "./ShowEvent";
import { fetchUserEvents } from "../../services/eventsService";

const ShowEventsList = (props) => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const events = await fetchUserEvents(props.query);
      setEvents(events.reverse());
    };

    fetchData();
  }, [props.query]);

  return (
    <div className="p-6">
      <p className="text-gray-500 uppercase">{props.query} events</p>
      {events && events.length === 0 ? "No events here" : null}
      {events &&
        events.map((event, index) => {
          return (
            <ShowEvents
              query={props.query}
              key={index}
              name={event.name}
              updated={event.updated_at}
            />
          );
        })}
    </div>
  );
};

export default ShowEventsList;
