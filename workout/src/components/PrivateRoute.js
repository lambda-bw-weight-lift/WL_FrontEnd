import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('token') ? (
          <Component {...props} /> // If the token is in local storage, render private component
        ) : (
          <Redirect to="/login" /> // If they are not logged in via token, redirect to login page
        )
      }
    />
  );
};

export default PrivateRoute;