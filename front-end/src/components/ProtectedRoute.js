import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {

  function isAuth(){
    const user = sessionStorage.getItem("user");
    const cookieDate = new Date(sessionStorage.getItem("expires"));
    return user && cookieDate.getTime() >= new Date().getTime();
  }

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