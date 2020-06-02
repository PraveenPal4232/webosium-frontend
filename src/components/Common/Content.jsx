import React from "react";
import { Route, Switch } from "react-router-dom";

import TagsPage from "../TagsPageComponents/TagsPage";
import SearchPage from "../SearchPageComponents/SearchPage";
import Unsigned from "../ProfileComponents/Unsigned";
import ProfilePage from "../ProfileComponents/ProfilePage";
import EventsDetailPage from "../SingleEventComponents/EventDetailsPage";
import HomePage from "../HomePageComponents/HomePage";
import AllEventsEver from "../ContentComponents/AllEventsEver";
import { useStoreState } from "easy-peasy";
import Guidelines from "./Guidelines";
import NotFound from "./NotFound";

const Content = () => {
  const signedIn = useStoreState((state) => state.isLoggedIn);
  return (
    <div className="flex-1 p-4">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/all" component={AllEventsEver} />
        <Route exact path="/topics" component={TagsPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/policy-and-guidelines" component={Guidelines} />
        <Route
          path="/profile/:action"
          component={signedIn ? ProfilePage : Unsigned}
        />
        <Route exact path="/event/:id" component={EventsDetailPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Content;
