import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Linkify from "react-linkify";
import dateFormat from "dateformat";
import { Helmet } from "react-helmet";
import ReactGa from "react-ga";

import { fetchPublicEventDetails } from "../../services/eventsService";

import { Calendar, Clock } from "react-feather";
import TagChip from "./TagChip";

const EventsDetailPage = () => {
  let { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGa.pageview(`/event/${id}`);

    const fetchData = async () => {
      const data = await fetchPublicEventDetails(id);
      setEvent(data);
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  if (event) {
    const { name, image, description, date, tags, link } = event;
    return (
      <div>
        <Helmet
          title={name}
          meta={[
            { name: "author", content: "webosium" },

            { name: "twitter:site", content: "webosium" },
            { name: "twitter:creator", content: "webosium" },
            { name: "twitter:title", content: name },
            { name: "twitter:image", content: image },
            { name: "twitter:card", content: "summary" },

            { property: "og:title", content: name },
            { property: "og:site_name", content: "webosium" },
            { property: "og:type", content: "website" },
            {
              property: "og:url",
              content: "https://webosium.xyz/event/" + id,
            },
            { property: "og:description", content: description },
            { property: "og:image", content: image },
            { property: "og:site_name", content: "webosium" },
          ]}
        />

        <h1 className="flex items-center">
          <p className="text-3xl capitalize">{name} </p>
          <div className="hidden md:block mx-2">
            <a
              href={link.startsWith("http") ? link : `http://${link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-700 hover:bg-blue-500 text-white rounded-full px-4 py-1 w-full">
                Attend Webinar
              </button>
            </a>
          </div>
        </h1>
        <p className="flex items-center">
          <Calendar className="mr-2" size={18} />
          <span className="mr-2">{dateFormat(date, "ddd, mmm d, yyyy")}</span>
          <Clock className="mr-2" size={18} />
          <span className="">{dateFormat(date, "h:MM TT")}</span>
        </p>
        <div className="mt-4">
          {tags.map((topic, index) => {
            return <TagChip name={topic.name} key={index} />;
          })}
        </div>
        <div className="max-w-sm w-full lg:max-w-full lg:flex mt-10">
          <div className="flex-none mb-10">
            <img
              className="md:max-w-xl rounded-lg"
              src={image}
              alt="event poster"
            />
          </div>
          <div className="pt-0 md:px-6">
            <h1 className="text-xl uppercase tracking-widest mb-4">
              Description
            </h1>
            <p className="whitespace-pre-wrap">
              <Linkify className="">{description}</Linkify>
            </p>
          </div>
        </div>
        <div className="md:hidden mt-8">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-700 text-white rounded-full px-4 py-3 w-full">
              Attend Webinar
            </button>
          </a>
        </div>
      </div>
    );
  } else {
    return "Loading...";
  }
};

export default EventsDetailPage;
