import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Orgs from './components/Orgs/Orgs';
import OrgSearch from './components/OrgSearch/OrgSearch';
import DashBoard from './components/Dashbard/Dashboard';
import NotFound from './components/NotFound/NotFound';
import SideDrawer from './components/SideDrawer/SideDrawer';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute
          exact
          path="/orgs/:orgID/dashboard"
          component={DashBoard}
        />
        <PrivateRoute exact path="/orgs/search" component={OrgSearch} />
        <PrivateRoute exact path="/orgs" component={Orgs} />
        <Route path="/" exact component={() => <Redirect to="/orgs" />} />
        <Route path="/sidedrawer" component={SideDrawer} />
        <Route path="" component={NotFound} />
      </Switch>
    </div>
  );
}
