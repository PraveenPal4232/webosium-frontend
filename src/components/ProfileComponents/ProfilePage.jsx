import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import ReactGa from "react-ga";

import ActionButtons from "./ActionButtons";
import CreateEventForm from "./CreateEventForm";
import ShowEventsList from "./ShowEventsList";
import CreateTopicForm from "./CreateTopicForm";

const ProfilePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGa.pageview("/profile");
    
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <ActionButtons />
      <Route path={"/profile/create"} component={CreateEventForm} />
      <Route path={"/profile/topics"} component={CreateTopicForm} />
      <Route path={"/profile/pending"}>
        <ShowEventsList query={"pending"} />
      </Route>
      <Route path={"/profile/rejected"}>
        <ShowEventsList query={"rejected"} />
      </Route>
      <Route path={"/profile/approved"}>
        <ShowEventsList query={"approved"} />
      </Route>
    </div>
  );
};

export default ProfilePage;
