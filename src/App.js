import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from './components/Login'
import UserGaurd from './components/UserGaurd'
import Orgs from './components/Orgs'
import DashBoard from './components/Dashbard'

export default function App() {
  return (
    <div>
      <Switch>
        <Route path='/login' component={Login} />
        <UserGaurd>
          <Route path='/orgs/:orgID/dashboard' component={DashBoard} />
          <Route path='/orgs' component={Orgs} />
        </UserGaurd>
      </Switch>
    </div>
  )
}
