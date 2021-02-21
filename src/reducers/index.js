import { combineReducers } from 'redux';
import alert from './Alert';
import auth from './Auth';
// import organisation from './organisation';

export default combineReducers({ alert, auth  });