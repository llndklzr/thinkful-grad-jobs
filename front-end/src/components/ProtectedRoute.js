import React from "react";
import { Redirect, Route } from "react-router-dom";
import isAuth from "../utils/isAuth";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuth() ? <Component {...props} /> : <Redirect to={"/register"} />
      }
    />
  );
}

export default ProtectedRoute;