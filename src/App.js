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

export default App;
