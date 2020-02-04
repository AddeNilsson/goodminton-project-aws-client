import * as types from '../constants/actionTypes'
import { getDataRequest } from '../api'

export const getData = (token) => (
  dispatch => {
    dispatch(getRequested())

    return getDataRequest(token)
      .then(data => {
        dispatch(getSuccess(data));
      })
      .catch(error => {
        console.error(error);
        dispatch(getFailure('Failed getting data'));
      });
  }
);

const getRequested = () => ({
  type: types.GET_DATA_REQUESTED,
});

const getSuccess = (data) => ({
  type: types.GET_DATA_SUCCESS,
  payload: data,
});

const getFailure = (error) => ({
  type: types.GET_DATA_FAILURE,
  payload: error,
});

export const clearData = () => ({
  type: types.CLEAR_DATA,
});
