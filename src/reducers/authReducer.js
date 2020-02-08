import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default (state = initialState.auth, action) => {
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS: {
      const { user } = action.payload;
        return {
          ...state,
          isAuthenticated: true,
          user,
        };
      }
      case types.GET_CURRENT_USER_SUCCESS: {
        if (typeof (action.payload) === 'string') { // aws returning 'No Current User'
          return state;
        }
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
        }
      }
      case types.SIGN_UP_USER_SUCCESS: {
        const { user } = action.payload;
        return {
          ...state,
          user,
          pendingConfirm: true,
        };
      }
      case types.CONFIRM_SIGN_UP_SUCCESS: {
        return {
          ...state,
          pendingConfirm: false,
        };
      }
      case types.TOGGLE_PENDING_CONFIRM_ACCOUNT: {
        return {
          ...state,
          pendingConfirm: !state.pendingConfirm,
        };
      }
    default:
      return state;
  };
};
