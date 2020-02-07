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
      case types.GET_CURRENT_USER_SUCCESS:
        if (typeof (action.payload) === 'string') {
          // aws returning 'No Current User'
          return { ...state };
        }
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
        }
    default:
      return state;
  };
};
