import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import GoogleApiWrapper from "./Map";
import Stories from "./Stories";
import StoryForm from "./StoryForm";
import DragNDrop from "./DragNDrop";
import RegisterUser from "./RegisterUser";
import LoginUser from "./LoginUser";
import ListGrads from "./ListGrads";
import ProtectedRoute from "./ProtectedRoute";

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
      <Route path="/register">
        <RegisterUser />
      </Route>
      <Route path="/login">
        <LoginUser/>
      </Route>
      <ProtectedRoute path="/graduates" component={ListGrads} />
    </Switch>
  )
}