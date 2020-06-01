import React from "react";
import SearchResultEvents from "./SearchResultsEvents";

const SearchResults = (props) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 custom-scrollbar">
        {props.events && props.events.length === 0 ? "No events found" : null}
        {props.events &&
          props.events.map((event, index) => {
            return <SearchResultEvents event={event} key={index} />;
          })}
      </div>
    </div>
  );
};

export default SearchResults;
