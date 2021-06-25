import React from "react";
import { Switch, Route } from "react-router-dom";
import GoogleApiWrapper from "./Map";


export default function Router(){
  return(
    <Switch>
      <Route path="/" exact>
      </Route>
      <Route path="/map">
        <GoogleApiWrapper />
      </Route>
    </Switch>
  )
}