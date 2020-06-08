import React from 'react';

import { Switch, Route } from 'react-router-dom'

import LoginPage from './pages/Auth/Login'
import HomePage from './pages/Guest/Home'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/" component={LoginPage} />
      </Switch>
    </div>
  );
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



export default App;
