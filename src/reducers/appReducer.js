import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default (state = initialState.app, action) => {
  switch (action.type) {
    case types.LOGIN_USER_REQUESTED:
    case types.GET_CURRENT_USER_REQUESTED:
    case types.SIGN_OUT_USER_REQUESTED:
    case types.SIGN_UP_USER_REQUESTED:
    case types.CONFIRM_SIGN_UP_REQUESTED:
    case types.GET_PLAYER_DATA_REQUESTED:
    case types.GET_PLAYERS_DATA_REQUESTED:
    case types.INITIAL_LOGIN_REQUESTED:
      return {
        ...state,
        loading: state.loading + 1,
        isLoading: (state.loading + 1 ) > 0,
      };
    case types.LOGIN_USER_SUCCESS:
    case types.GET_CURRENT_USER_SUCCESS:
    case types.SIGN_OUT_USER_SUCCESS:
    case types.SIGN_UP_USER_SUCCESS:
    case types.CONFIRM_SIGN_UP_SUCCESS:
    case types.GET_PLAYER_DATA_SUCCESS:
    case types.GET_PLAYERS_DATA_SUCCESS:
    case types.INITIAL_LOGIN_SUCCESS:
      return {
        ...state,
        loading: state.loading - 1,
        isLoading: (state.loading - 1) > 0,
      };
    case types.LOGIN_USER_FAILURE:
    case types.GET_CURRENT_USER_FAILURE:
    case types.SIGN_OUT_USER_FAILURE:
    case types.SIGN_UP_USER_FAILURE:
    case types.CONFIRM_SIGN_UP_FAILURE:
    case types.GET_PLAYER_DATA_FAILURE:
    case types.GET_PLAYERS_DATA_FAILURE:
    case types.INITIAL_LOGIN_FAILURE:
      let errors = [...state.errors, action.payload]
      return {
        ...state,
        errors,
        loading: state.loading - 1,
        isLoading: (state.loading - 1) > 0,
      };
    default:
      return state
  };
};
