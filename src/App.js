import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './utils/CreateStore'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Switch, Route } from 'react-router-dom'

import LoginPage from './pages/Auth/Login'
import SearchOrgPage from './pages/Guest/SearchOrg'
import HomePage from './pages/Guest/Home'


class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.token}
        <PersistGate loading={"loading"} persistor={persistor}>
          <Switch>
            <Route exact path="/searchOrgs/" component={SearchOrgPage} />
            <Route exact path="/login/" component={LoginPage} />
            <Route exact path='/' component={HomePage} />
          </Switch>
        </PersistGate>
      </div>
    );
  }
}

// function PrivateRoute({ component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         isAuthenticated ? (
//           React.createElement(component, props)
//         ) : (
//             <Redirect
//               to={{
//                 pathname: "/login",
//                 state: {
//                   from: props.location,
//                 },
//               }}
//             />
//           )
//       }
//     />
//   );
// }

// In case of user is logged in(token found) then the Public route will not let the user enter login or signup page 
// function PublicRoute({ component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         isAuthenticated ? (
//           <Redirect
//             to={{
//               pathname: "/app/dashboard",
//             }}
//           />
//         ) : (
//             React.createElement(component, props)
//           )
//       }
//     />
//   );
// }


const mapStateToProps = (state) => ({
  token: state.auth.token
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)