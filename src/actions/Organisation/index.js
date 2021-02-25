/**
 * Organisation Action
 */
import ApiClient from '../../utils/ApiClient';
import { FETCH_ORG_GROUPS, SET_ORG_GROUPS, ORG_GROUPS_ERROR } from './types';

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
      payload: error,
    });
  }
};
