import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss';

import { Router } from 'react-router-dom'
import customHistory from './utils/CustomHistory'
import { Provider } from 'react-redux'
import { store } from './utils/CreateStore'

import './theme.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={customHistory} >
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);