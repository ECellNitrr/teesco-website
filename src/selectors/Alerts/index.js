import { createSelector } from 'reselect';

//App constants for specific error selector
import * as appConstants from '../../utils/constants';

export const selectAlert = state => state.alert;

export const makeSelectAuthState = () => createSelector(
    selectAlert,
    alertState => alertState
)


export const makeSelectErrors = () => createSelector(
    selectAlert,
    alertState => alertState.errorAlerts
)

export const makeSelectLoginError = () => createSelector(
    makeSelectErrors(),
    errorAlerts => errorAlerts.filter((error) => { return error.errType === appConstants.ALERT_USER_LOGIN_ERR })
)