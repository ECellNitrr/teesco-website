import { createSelector } from 'reselect';

//Select specific piece from auth state

export const selectAuth = state => state.auth;

export const makeSelectAuthState = () => createSelector(
    selectAuth,
    authState => authState
)

export const makeSelectLoading = () => createSelector(
    selectAuth,
    authState => authState.loading
)

export const makeSelectErrors = () => createSelector(
    selectAuth,
    authState => authState.error
)