import { createSelector } from 'reselect';

//App constants for specific error selector
import * as appConstants from '../../utils/constants';

export const selectAlert = state => state.alert;

//Returns the current alert state
export const makeSelectAlertState = () => createSelector(
    selectAlert,
    alertState => alertState
)

//Returns all errorAlerts present in state 
export const makeSelectErrors = () => createSelector(
    selectAlert,
    alertState => alertState.errorAlerts
)

//Returns an array with all the match errors
export const makeSelectLoginError = () => createSelector(
    makeSelectErrors(), //Since this returns all errorAlerts 
    errorAlerts => errorAlerts.filter((error) => { return error.errType === appConstants.ALERT_USER_LOGIN_ERR })
)

export const makeSelectUserInfoError = () => createSelector(
    makeSelectErrors(), //Since this returns all errorAlerts
    errorAlerts => errorAlerts.filter((error) => { return error.errType === appConstants.ALERT_LOAD_USER_ERR })
)

export const makeSelectUserInfoError = () => createSelector(
    makeSelectErrors(), //Since this returns all errorAlerts
    errorAlerts => errorAlerts.filter((error) => { return error.errType === appConstants.ALERT_LOAD_USER_ORGS_ERR })
)