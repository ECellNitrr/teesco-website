//Utils
import ApiClient from "../../utils/ApiClient";
import { makeErrorDict } from "../../utils/ApiUtils";
import CustomHistory from "../../utils/CustomHistory";
import { storeUserToken } from "../../utils/Token";

//Alert Action
import { setErrorAlert } from '../Alerts';

//Types
import * as authTypes from "./types";
import * as appConstants from "../../utils/constants";

//SetLoading state
export const setLoadingAction = (loading) => (dispatch) => {
  dispatch({
    type: authTypes.SET_LOADING,
    payload: loading,
  });
};


//Login User
export const loginAction = (email, password) => (dispatch) => {// import rootReducer from "../reducers";
  dispatch(setLoadingAction(true));
  ApiClient()
    .post("/users/login/", {
      email,
      password,
    })
    .then((response) => {
      storeUserToken(response.data.token);
      dispatch(loadUserAction());
      CustomHistory.push("/orgs");
    })
    .catch((err) => {
      dispatch(setErrorAlert(makeErrorDict(err), appConstants.ALERT_USER_LOGIN_ERR));
      dispatch({ type: authTypes.LOGIN_ERROR });
    })
    .finally(() => {
      dispatch(setLoadingAction(false));
    });
};

//Get Basic user info
export const loadUserAction = () => dispatch => {
  dispatch(setLoadingAction(true));
  ApiClient()
      .get('/users/')
      .then((response) => {
        dispatch({
          type: authTypes.LOAD_USER,
          payload: response.data,
        })
      })
      .catch((err) => {
        dispatch(setErrorAlert(makeErrorDict(err), appConstants.ALERT_LOAD_USER_ERR));
        dispatch({ type: authTypes.LOAD_USER_ERROR });
      })
      .finally(() => {
        dispatch(setLoadingAction(false));
      })
}

//Get all organisation user is associated with
export const getUserOrganisationsAction = () => dispatch => {
  dispatch(setLoadingAction(true));
  ApiClient()
      .get('/users/org/')
      .then((response) => {
        dispatch({
          type: authTypes.LOAD_USER_ORGS,
          payload: response.data
        })
      })
      .catch((err) => {
        dispatch(setErrorAlert(makeErrorDict(err), appConstants.ALERT_LOAD_USER_ORGS_ERR));
        dispatch({ type: authTypes.LOAD_USER_ORGS_ERROR });
      })
      .finally(() => {
        dispatch(setLoadingAction(false));
      })
}