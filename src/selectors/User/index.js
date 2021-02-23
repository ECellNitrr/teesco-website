import { createSelector } from 'reselect';

//Select specific piece from user state

export const selectUser = state => state.user;

export const makeSelectAuthState = () => createSelector(
    selectUser,
    userState => userState
)

export const makeSelectLoading = () => createSelector(
    selectUser,
    userState => userState.loading
)
