import * as types from '../constants/actionTypes'
import {
  loginUserRequest,
  getCurrentUserRequest,
  signOutUserRequest,
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

export const getCurrentUser = () => (
  dispatch => {
    console.log('dispacth cur user');
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
    console.log('dispacth cur user');
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
