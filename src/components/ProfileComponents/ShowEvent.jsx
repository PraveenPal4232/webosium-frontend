import React from "react";
import dateFormat from "dateformat";

const ShowEvents = (props) => {
  return (
    <div
      className={`bg-${
        props.query === "pending"
          ? "blue"
          : props.query === "rejected"
          ? "red"
          : "gray"
      }-200 rounded-md w-full max-w-lg mt-4 p-4`}
    >
      <h1 className="text-lg">{props.name}</h1>
      <h3 className="text-gray-600">
        <span className="font-bold uppercase text-xs">Submitted: </span>
        <br />
        {dateFormat(props.date, "ddd, mmm d, yyyy, h:MM TT")}
      </h3>
    </div>
  );
};

export default ShowEvents;
