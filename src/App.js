import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Orgs from './components/Orgs'
import DashBoard from './components/Dashbard'

export default function App() {
  return (
    <div>
      <Switch>
        <Route path='/login' component={Login} />
        <PrivateRoute path='/orgs/:orgID/dashboard' component={DashBoard} />
        <PrivateRoute path='/orgs' component={Orgs} />
        <PrivateRoute path='' component={() => <Redirect to='/orgs' />} />
      </Switch>
    </div>
  )
}
