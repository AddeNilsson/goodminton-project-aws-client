import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default (state = initialState.auth, action) => {
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    default:
      return state;
  };
};
