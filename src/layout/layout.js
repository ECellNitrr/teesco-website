import React from "react";
import {Route,Switch,withRouter,} from "react-router-dom";
import Header from "../components/Header/Header";
import Dashboard from "../pages/Dashboard/Dashboard";

function Layout(props) {

  return (
    <div >
        <Header history={props.history} />
        <Switch>
          <Route path="/app/dashboard" component={Dashboard} />
          {/* all the Routes are meant to be kept here */}
        </Switch>
    </div>
  );
}

export default withRouter(Layout);