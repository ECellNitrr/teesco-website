import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss';

import { Router } from 'react-router-dom'
import customHistory from './utils/CustomHistory'

import { Provider } from 'react-redux';
import { store, persistedStore } from './utils/CreateStore';
import { PersistGate } from "redux-persist/lib/integration/react";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading cache...</div>} persistor={persistedStore}>
        <Router history={customHistory} >
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);