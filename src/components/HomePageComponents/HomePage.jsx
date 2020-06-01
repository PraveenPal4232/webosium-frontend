import React, { useEffect } from "react";

import { useStoreActions, useStoreState } from "easy-peasy";
import { fetchPublicEvents } from "../../services/eventsService";

import UpcomingEvents from "../ContentComponents/UpcomingEvents";
import PastEvents from "../ContentComponents/PastEvents";

const HomePage = () => {
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
    <React.Fragment>
      <UpcomingEvents />
      <PastEvents />
    </React.Fragment>
  );
};

export default HomePage;
