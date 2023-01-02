import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('moments_token');
  return (
    <Route
      {...rest}
      render={(props) =>
        // check if the user is authenticated
        isAuthenticated.length > 0 ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
