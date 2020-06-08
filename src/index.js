import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { UserProvider } from './actions/AuthActions';
import {Provider} from 'react-redux';
import {store} from './createStore';

ReactDOM.render(
  <React.StrictMode>
    {/* used react context consumer so the children component can use the state anywhere */}
    <UserProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
