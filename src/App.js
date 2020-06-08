import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home"
import Error from "./pages/Error/Error"
import Login from "./pages/Login/Login";
import Layout from "./layout/layout"
import Register from './pages/Register/Register';
import { useUserState } from "./actions/AuthActions";

export default function App() {
  var { isAuthenticated } = useUserState(); // bool value which tells whether the user is registered or not

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/home" component={Home} />
        {/* for the landing page of main app */}
        <Route exact path="/app" render={() => <Redirect to="/app/dashboard" />} />
        {/* considering entire app and all of its functionalities will be private and only login register and landing page will be public  */}
        <PrivateRoute path="/app" component={Layout} />
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/register" component={Register} />
        <Route component={Error} />
      </Switch>
    </HashRouter>
  );

// In case of user is not logged in(token not found) then the Private route will redirect the user to the login page 
  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

// In case of user is logged in(token found) then the Public route will not let the user enter login or signup page 
  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/app/dashboard",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }

}
