import * as alertTypes from '../../actions/Alerts/types';

/**
 * Alerts can be of three types
 * 1)Notification Messages
 * 2)Success Messages
 * 3)Error Messages
 */

const initialState = {
    errorAlerts: [],
    notifAlerts: [],
    successAlerts: [],
};

export default function (state=initialState, action){
    const { type, payload } = action;
    switch (type) {
        case alertTypes.SET_ERROR:
            return {
                ...state,
                errorAlerts: [...state.errorAlerts, payload] 
            }
        case alertTypes.REMOVE_ERROR:
            return {
                ...state,
                errorAlerts: state.errorAlerts.filter((error) => error.id !== payload)
            }
        default:
            return state;
    }
}