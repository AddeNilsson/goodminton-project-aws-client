import * as types from '../constants/actionTypes'

import {
  loginUserRequest,
  getCurrentUserRequest,
  signOutUserRequest,
  signUpUserRequest,
  confirmSignUpRequest,
} from '../api/';

import {
  setInitialPlayerData,
} from './player';

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

export const getCurrentUser = () => (
  dispatch => {
    dispatch(getCurrentUserRequested());
    return getCurrentUserRequest()
      .then(data =>{
        dispatch(getCurrentUserSuccess(data))
      })
      .catch((error) => {
        dispatch(getCurrentUserFailure(error))
      })
  }
);

const getCurrentUserRequested = () => ({
  type: types.GET_CURRENT_USER_REQUESTED,
});

const getCurrentUserSuccess = data => ({
  type: types.GET_CURRENT_USER_SUCCESS,
  payload: data,
});

const getCurrentUserFailure = error => ({
  type: types.GET_CURRENT_USER_FAILURE,
  payload: error,
});

export const signOutUser = () => (
  dispatch => {
    dispatch(signOutUserRequested());
    return signOutUserRequest()
      .then(data =>{
        dispatch(signOutUserSuccess(data))
      })
      .catch((error) => {
        dispatch(signOutUserFailure(error))
      })
  }
);

const signOutUserRequested = () => ({
  type: types.SIGN_OUT_USER_REQUESTED,
});

const signOutUserSuccess = () => ({
  type: types.SIGN_OUT_USER_SUCCESS,
});

const signOutUserFailure = error => ({
  type: types.SIGN_OUT_USER_FAILURE,
  payload: error,
});

export const signUpUser = (payload) => (
  dispatch => {
    dispatch(signUpUserRequested());
    return signUpUserRequest(payload)
      .then(data => {
        dispatch(signUpUserSuccess(data))
      })
      .catch((error) => {
        dispatch(signUpUserFailure(error))
      })
  }
);

const signUpUserRequested = () => ({
  type: types.SIGN_UP_USER_REQUESTED,
});

const signUpUserSuccess = data => ({
  type: types.SIGN_UP_USER_SUCCESS,
  payload: data,
});

const signUpUserFailure = error => ({
  type: types.SIGN_UP_USER_FAILURE,
  payload: error,
});

export const confirmSignUpAndLogIn = (payload) => (
  dispatch => {
    const { password, email, username } = payload;
    dispatch(confirmSignUpRequested());
    return confirmSignUpRequest(payload)
      .then(data => dispatch(confirmSignUpSuccess(data)))
      .then(() => dispatch(loginUser({ username: email, password})))
      .then((data) => dispatch(setInitialPlayerData({ username })))
      .catch((error) => {
        dispatch(confirmSignUpFailure(error))
      })
  }
);

const confirmSignUpRequested = () => ({
  type: types.CONFIRM_SIGN_UP_REQUESTED,
});

const confirmSignUpSuccess = data => ({
  type: types.CONFIRM_SIGN_UP_SUCCESS,
  payload: data,
});

const confirmSignUpFailure = error => ({
  type: types.CONFIRM_SIGN_UP_FAILURE,
  payload: error,
});

export const togglePendingConfirmAccount = () => ({
  type: types.TOGGLE_PENDING_CONFIRM_ACCOUNT,
})
