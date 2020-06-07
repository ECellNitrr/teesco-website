import React from "react";
import {Route,Switch,withRouter,} from "react-router-dom";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import Dashboard from "../Pages/Dashboard/Dashboard";

function Layout(props) {

  return (
    <div >
        <Header history={props.history} />
        <div style={{display:"flex"}}>
          <Sidebar />
          <Switch>
            <Route path="/app/dashboard" component={Dashboard} />
            {/* all the Routes are meant to be kept here */}
          </Switch>
        </div>
    </div>
  );
}

export default withRouter(Layout);