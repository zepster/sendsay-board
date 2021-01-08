import React from 'react';
import {
  Route,
  Redirect,
  RouteProps,
} from 'react-router-dom';
import { authContext } from './auth/AuthProvider';

export const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const { user: { auth } } = React.useContext(authContext);
  return (
    <Route
      {...rest}
      render={({ location }) => (auth ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      ))}
    />
  );
};
