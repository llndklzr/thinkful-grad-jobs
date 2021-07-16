import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import GoogleApiWrapper from "./Map";
import "../styles/styles.scss";
import Stories from "./Stories";
import StoryForm from "./StoryForm";
import DragNDrop from "./DragNDrop";

export default function Router(){
  return(
    <Switch>
      <Route path="/" exact>
        <Redirect to={"/map"} />
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
      <Route path="/drag-n-drop">
        <DragNDrop />
      </Route>
    </Switch>
  )
}