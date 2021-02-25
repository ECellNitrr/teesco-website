//Organisation Reducers

import {
  FETCH_ORG_GROUPS,
  SET_ORG_GROUPS,
  ORG_GROUPS_ERROR,
} from '../../actions/Organisation/types';

const initialState = {
  loading: false,
  groups: [],
  error: null,
};

const OrgGroupsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ORG_GROUPS:
      return {
        ...state,
        loading: true,
      };
    case SET_ORG_GROUPS:
      return {
        ...state,
        loading: false,
        groups: payload,
      };
    case ORG_GROUPS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default OrgGroupsReducer;
