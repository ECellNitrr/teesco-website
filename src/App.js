import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from './pages/Login/LoginPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Orgs from './components/Orgs/Orgs'
import OrgSearch from './components/OrgSearch/OrgSearch'
import DashBoard from './components/Dashbard/Dashboard'
import NotFound from './components/NotFound/NotFound'
import SignUpPage from './pages/SignUpPage/SignUpPage'

export default function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/login' component={Login} />
      <Route  path='/signup' component={SignUpPage} />
        <PrivateRoute exact path='/orgs/:orgID/dashboard' component={DashBoard} />
        <PrivateRoute exact path='/orgs/search' component={OrgSearch} />
        <PrivateRoute exact path='/orgs' component={Orgs} />
        <Route path='/' exact component={() => <Redirect to='/orgs' />} />
        <Route path='' component={NotFound} />
      </Switch>
    </div>
  )
}
