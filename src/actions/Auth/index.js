//Utils
import ApiClient from "../../utils/ApiClient";
import { makeErrorDict } from "../../utils/ApiUtils";
import CustomHistory from "../../utils/CustomHistory";
import { storeUserToken } from "../../utils/Token";

//Types
import * as authTypes from "./types";

//Alerts
import { setAlert } from '../Alert'

//SetLoading state
export const setLoadingAction = (loading) => (dispatch) => {
  dispatch({
    type: authTypes.SET_LOADING,
    payload: loading,
  });
};

//Login User
export const loginAction = (email, password) => (dispatch) => {
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
      const errors = makeErrorDict(err);
      //@ToDo Error Handling in new reducer
    })
    .finally(() => {
      dispatch(setLoadingAction(false));
    });
};
