import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { AuthProvider } from './pages/auth/AuthProvider';
import { Login } from './pages/auth/Login';
import { ApiConsole } from './pages/board/ApiConsole';
import { PrivateRoute } from './pages/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/board">
            <ApiConsole />
          </PrivateRoute>
          <Route exact path="/">
            <Redirect to="/board" />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
