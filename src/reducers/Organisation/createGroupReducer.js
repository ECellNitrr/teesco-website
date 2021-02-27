import {
  CREATE_ORG_GROUP_REQUEST,
  CREATE_ORG_GROUP_SUCCESS,
  CREATE_ORG_GROUP_FAIL,
} from '../../actions/Organisation/types';

const initialState = {
  loading: false,
  data: '',
  error: null,
};

const CreateOrgGroupReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_ORG_GROUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ORG_GROUP_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case CREATE_ORG_GROUP_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default CreateOrgGroupReducer;
