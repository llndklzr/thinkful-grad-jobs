import React from "react";
import { Switch, Route } from "react-router-dom";
import GoogleApiWrapper from "./Map";
import "../styles/styles.scss";


export default function Router(){
  return(
    <Switch>
      <Route path="/" exact>
      </Route>
      <Route path="/map">
        <section className="google-map">
          <GoogleApiWrapper />
        </section>
      </Route>
    </Switch>
  )
}