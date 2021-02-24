import * as alertTypes from './types';

//Set and clear error
export const setErrorAlert = (errors, errType, timeout=3000) => (dispatch) => {
    //Generate random number for alert for tracking and removing
    const id = Math.floor((Math.random() * 10000000) + 1);
    //Make alert Object
    const error  = { ...errors, id, errType };
    dispatch({
      type: alertTypes.SET_ERROR,
      payload: error
    });
    //Clear alert after timeout provided
    setTimeout(() => dispatch({ type: alertTypes.REMOVE_ERROR, payload: id }), timeout)
  }
  