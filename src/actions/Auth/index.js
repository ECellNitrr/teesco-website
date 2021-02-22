//Utils
import ApiClient from "../../utils/ApiClient";
import { makeErrorDict } from "../../utils/ApiUtils";
import CustomHistory from "../../utils/CustomHistory";
import { storeUserToken } from "../../utils/Token";

//Types
import * as authTypes from "./types";

//SetLoading state
export const setLoadingAction = (loading) => (dispatch) => {
  dispatch({
    type: authTypes.SET_LOADING,
    payload: loading,
  });
};

//Set and clear error
export const setErrorAlert = (errors, timeout=3000) => (dispatch) => {
  dispatch({
    type: authTypes.SET_AUTH_ERROR,
    payload: errors,
  })
  //Clear error after timeout provided
  setTimeout(() => dispatch({ type: authTypes.REMOVE_AUTH_ERROR }), timeout)
}

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
      CustomHistory.push("/orgs");
    })
    .catch((err) => {
      dispatch(setErrorAlert(makeErrorDict(err)));
      dispatch({ type: authTypes.LOGIN_ERROR });
    })
    .finally(() => {
      dispatch(setLoadingAction(false));
    });
};
