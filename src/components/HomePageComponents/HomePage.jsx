import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

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
      <Helmet
        title={"Webosium - Symposium on the web"}
        meta={[
          { name: "author", content: "webosium" },

          { name: "twitter:site", content: "webosium" },
          { name: "twitter:creator", content: "webosium" },

          { property: "og:site_name", content: "webosium" },
          { property: "og:type", content: "website" },

          { property: "og:site_name", content: "webosium" },
        ]}
      />
      <UpcomingEvents />
      <PastEvents />
    </React.Fragment>
  );
};

export default HomePage;
