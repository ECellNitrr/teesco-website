/**
 * Organisation Action
 */
import ApiClient from '../../utils/ApiClient';
import {
  FETCH_ORG_GROUPS,
  SET_ORG_GROUPS,
  ORG_GROUPS_ERROR,
  CREATE_ORG_GROUP_REQUEST,
  CREATE_ORG_GROUP_SUCCESS,
  CREATE_ORG_GROUP_FAIL,
} from './types';

export const getOrgGroupsAction = (id) => async (dispatch) => {
  dispatch({
    type: FETCH_ORG_GROUPS,
  });

  try {
    const { data } = await ApiClient().get(`/org/${id}/group/`);
    dispatch({
      type: SET_ORG_GROUPS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORG_GROUPS_ERROR,
      payload: error.response.data,
    });
  }
};

export const createOrgGroup = (id, name, role, permissions_array) => async (
  dispatch
) => {
  try {
    dispatch({
      type: CREATE_ORG_GROUP_REQUEST,
    });

    const { data } = await ApiClient().post(`/org/${id}/group/`, {
      name,
      role,
      permissions_array,
    });

    dispatch({
      type: CREATE_ORG_GROUP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_ORG_GROUP_FAIL,
      payload: error.response.data,
    });
  }
};
