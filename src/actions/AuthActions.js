import React from "react";
import axios from "axios";
import { baseURL } from "../utils";

var UserStateContext = React.createContext(); 
var UserDispatchContext = React.createContext();

function userReducer(state, action) {
  // to handle all different types of actions and changing the value in react Context
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isAuthenticated: true };
    case "SIGN_OUT_SUCCESS":
      return { ...state, isAuthenticated: false };
    case "LOGIN_FAILURE":
      return { ...state, isAuthenticated: false };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  var [state, dispatch] = React.useReducer(userReducer, {
    isAuthenticated: !!localStorage.getItem("id_token"), // checks whether token is present or not
  });
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  var context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useUserDispatch() {
  var context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUserState, useUserDispatch, loginUser, signOut };

function loginUser(dispatch, login, password, history, setIsLoading, setError, setValidation) {
  setError(false);
  setIsLoading(true);

  axios.post(`${baseURL}api/users/login/`, {"email":login,"password":password })
  .then(res => {
    if(res.status===202) {
      localStorage.setItem('id_token', res.data.token) // saving the token of the user in local storage
      setError(null)
      setValidation(null)
      setIsLoading(false)
      dispatch({ type: 'LOGIN_SUCCESS' })
      history.push('/app/dashboard')
    }
  })
  .catch(err => {
    console.log(err.response);
      dispatch({ type: "LOGIN_FAILURE" });
      setError(err.response.data.message); // for handling the error message
      setIsLoading(false);
      setValidation(err.response.data) // for handling the error for each input field
  })

}

function signOut(dispatch, history) {
  localStorage.removeItem("id_token"); // while signing out removing the token
  dispatch({ type: "SIGN_OUT_SUCCESS" }); // action type
  history.push("/login");
}