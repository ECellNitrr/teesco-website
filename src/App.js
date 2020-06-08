import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './utils/CreateStore'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Switch, Route, Redirect } from 'react-router-dom'

import LoginPage from './pages/Auth/Login'
import SearchOrgPage from './pages/Guest/SearchOrg'
import HomePage from './pages/Guest/Home'


class App extends Component {


  // In case of user is not logged in(token not found) then the Private route will redirect the user to the login page 
  PrivateRoute = ({ component, ...rest }) => {
    let ResultComponent = component
    ResultComponent = <ResultComponent/>

    if (!this.props.token) {
      ResultComponent = <Redirect to={{
        pathname: "/login/",
      }} />
    }

    return (
      <Route
        {...rest}
        render={props => ResultComponent}
      />
    );
  }

  // In case of user is logged in(token found) then the Public route will not let the user enter login or signup page 
  PublicRoute = ({ component, ...rest }) => {
    let ResultComponent = component
    ResultComponent = <ResultComponent/>
    
    if (this.props.token) {
      ResultComponent = <Redirect to={{
        pathname: "/searchOrgs/",
      }} />
    }

    return (
      <Route
        {...rest}
        render={props => ResultComponent}
      />
    );
  }


  render() {
    return (
      <div className="App">
        {this.props.token}
        <PersistGate loading={"loading"} persistor={persistor}>
          <Switch>
            <this.PrivateRoute exact path="/searchOrgs/" component={SearchOrgPage} />
            <this.PublicRoute exact path="/login/" component={LoginPage} />
            <Route exact path='/' component={HomePage} />
          </Switch>
        </PersistGate>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)