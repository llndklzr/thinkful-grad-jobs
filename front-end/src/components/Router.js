import React from "react";
import { Switch, Route } from "react-router-dom";
import GoogleApiWrapper from "./Map";
import "../styles/styles.scss";
import Stories from "./Stories";
import StoryForm from "./StoryForm";

export default function Router(){
  return(
    <Switch>
      <Route path="/" exact>
      </Route>
      <Route path="/map">
        <GoogleApiWrapper />
      </Route>
      <Route path="/stories">
        <Stories />
      </Route>
      <Route path="/new-story">
        <StoryForm />
      </Route>
    </Switch>
  )
}