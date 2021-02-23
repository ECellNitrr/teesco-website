import * as alertTypes from '../../actions/Alerts/types';

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