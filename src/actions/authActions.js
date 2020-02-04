import * as types from '../constants/actionTypes'
import {
  loginUserRequest,
} from '../api/';

export const loginUser = (payload) => {
  return dispatch => {
    dispatch(loginUserRequested())

    return loginUserRequest(payload)
      .then(data => {
        dispatch(loginUserSuccess(data))
      })
      .catch(error => {
        console.error(error);
        dispatch(loginUserFailure('Failed login'));
      });
  }
}

const loginUserRequested = () => ({
  type: types.LOGIN_USER_REQUESTED,
})

const loginUserSuccess = (data) => ({
  type: types.LOGIN_USER_SUCCESS,
  payload: data,
});

const loginUserFailure = error => ({
  type: types.LOGIN_USER_FAILURE,
  payload: error,
});
