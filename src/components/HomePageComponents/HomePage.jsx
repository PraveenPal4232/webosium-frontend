import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ReactGa from "react-ga";

import { useStoreActions, useStoreState } from "easy-peasy";
import { fetchPublicEvents } from "../../services/eventsService";

import UpcomingEvents from "../ContentComponents/UpcomingEvents";
import PastEvents from "../ContentComponents/PastEvents";

const HomePage = () => {
  const setEvents = useStoreActions((action) => action.events.setEvents);
  const events = useStoreState((state) => state.events.allEvents);

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGa.pageview("/");

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
          { name: "twitter:card", content: "summary" },
          {
            name: "twitter:image",
            content: process.env.PUBLIC_URL + "/logo192.png",
          },
          { name: "twitter:title", content: "Symposium on the web" },
          { property: "og:description", content: "Find and create webinars" },

          { property: "og:site_name", content: "webosium" },
          { property: "og:type", content: "website" },

          { property: "og:site_name", content: "webosium" },
          {
            property: "og:image",
            content: process.env.PUBLIC_URL + "/logo192.png",
          },
        ]}
      />
      <UpcomingEvents />
      <PastEvents />
    </React.Fragment>
  );
};

export default HomePage;
