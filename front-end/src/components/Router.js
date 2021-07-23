import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import GoogleApiWrapper from "./Map";
import Stories from "./Stories";
import StoryForm from "./StoryForm";
import DragNDrop from "./DragNDrop";
import RegisterUser from "./RegisterUser";
import LoginUser from "./LoginUser";
import ProtectedRoute from "./ProtectedRoute";
import ResumeDownload from "./ResumeDownload";

export default function Router() {
  return (
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
      <ProtectedRoute path="/new-story" component={StoryForm} />
      {/* <Route path="/new-story">
        <StoryForm />
      </Route> */}
      <Route path="/drag-n-drop">
        <DragNDrop />
      </Route>
      <Route path="/register">
        <RegisterUser />
      </Route>
      <Route path="/login">
        <LoginUser />
      </Route>
      <Route path="/resumes">
        <ResumeDownload />
      </Route>
    </Switch>
  );
}
