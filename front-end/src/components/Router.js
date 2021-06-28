import React from "react";
import { Switch, Route } from "react-router-dom";
import GoogleApiWrapper from "./Map";
import Button from "./Button";


export default function Router(){
  return(
    <Switch>
      <Route path="/" exact>
        <Button />
      </Route>
      <Route path="/map">
        <GoogleApiWrapper />
      </Route>
    </Switch>
  )
}