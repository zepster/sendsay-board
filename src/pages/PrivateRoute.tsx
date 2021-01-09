import React from 'react';
import {
  Route,
  Redirect,
  RouteProps,
} from 'react-router-dom';
import { authContext } from './auth/AuthProvider';

const Loader = () => (
  <div style={{
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
  }}
  />
);

export const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const { account: { auth, initializing } } = React.useContext(authContext);
  return (
    <Route
      {...rest}
      render={({ location }) => (initializing || auth ? (
        <>
          { initializing && <Loader />}
          {children}
        </>
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
