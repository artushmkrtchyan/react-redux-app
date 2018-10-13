import React from "react";
import { Route, Redirect } from "react-router-dom";
import PrivateLayout from "../components/Layouts/Private";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <PrivateLayout>
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("user") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  </PrivateLayout>
);
