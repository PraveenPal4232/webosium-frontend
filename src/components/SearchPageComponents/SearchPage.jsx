import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { useLocation } from "react-router-dom";
import {
  fetchPublicEventsByTags,
  fetchPublicEventsByTitle,
} from "../../services/eventsService";
import ReactGa from "react-ga";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchPage = () => {
  let query = useQuery();
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGa.pageview("/search");

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const fetchData = async (tags) => {
      const events = await fetchPublicEventsByTags(tags);
      setSearchResults(events);
    };
    if (query.get("tags") !== null) {
      fetchData(query.get("tags"));
    }
    // eslint-disable-next-line
  }, [query.get("tags")]);

  useEffect(() => {
    const fetchData = async (title) => {
      const events = await fetchPublicEventsByTitle(title);
      setSearchResults(events);
    };
    if (query.get("title") !== null) {
      fetchData(query.get("title"));
    }
    // eslint-disable-next-line
  }, [query.get("title")]);

  return (
    <div>
      <SearchBar />
      <div className="mt-8">
        <h3 className="text-gray-500 uppercase tracking-widest my-4">
          Search results {query.get("tags") || query.get("title") ? `"${query.get("tags") || query.get("title")}"` : null}
        </h3>
      </div>
      <SearchResults events={searchResults} />
    </div>
  );
};

export default SearchPage;
