import ApiClient from '../../utils/ApiClient';
import History from '../../utils/CustomHistory';
import { setUserOrgs } from '../PrivateRoute/actions';
// actions

// selector

// reducer
const initialState = {};

export const UserGaurdReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

// thunks

// only for dashboard because its redirecting to dashboard and orgs search page
export const fetchUserOrgsHandler = () => async (dispatch) => {
  const { data } = await ApiClient().get('/users/org/');
  if (data.length > 0) {
    dispatch(setUserOrgs(data));
    History.push(`/orgs/${data[0].route_slug}/dashboard`);
  } else {
    History.push(`/orgs/search`);
  }
};

// used in sidedrawer and whereever required
export const fetchUserOrgs = () => async (dispatch) => {
  const { data } = await ApiClient().get('/users/org/');
  if (data.length > 0) {
    dispatch(setUserOrgs(data));
  } else {
    dispatch(setUserOrgs({ data: 'no data available' }));
  }
};
