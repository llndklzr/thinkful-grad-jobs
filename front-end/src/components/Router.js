import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MapParent from "./map/MapParent";
import StoriesParent from "./ViewStories/StoriesParent";
import CreateStory from "./CreateStory/CreateStory";
import RegisterUser from "./RegisterUser";
import LoginUser from "./LoginUser";
import ProtectedRoute from "./ProtectedRoute";
import ResumeDownload from "./ResumeDownload";
import SingleGradDisplay from "./singleGrad/SingleGradDisplay";
import HomePage from "./HomePage";

export default function Router() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/map">
        <MapParent />
      </Route>
      <Route path="/stories">
        <StoriesParent />
      </Route>
      <ProtectedRoute path="/new-story" component={CreateStory} />
      <Route path="/register">
        <RegisterUser />
      </Route>
      <Route path="/login">
        <LoginUser />
      </Route>
      <Route path="/resumes">
        <ResumeDownload />
      </Route>
      <Route path="/graduates/:graduate_id">
        <SingleGradDisplay />
      </Route>
    </Switch>
  );
}
