import React from "react";
import { AlertTriangle } from "react-feather";

const Unsigned = () => {
  return (
    <div className="w-full h-64 flex justify-center items-center">
      <h2 className="text-3xl flex items-center justify-between flex-col text-center text-gray-600">
        <AlertTriangle className="mx-3 mb-8" size={50} color="orange"/>
        Sign-In to Add your own events!
      </h2>
    </div>
  );
};

export default Unsigned;
