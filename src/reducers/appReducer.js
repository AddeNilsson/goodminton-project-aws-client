import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default (state = initialState.app, action) => {
  switch (action.type) {
    case types.LOGIN_USER_REQUESTED:
    case types.GET_CURRENT_USER_REQUESTED:
      return {
        ...state,
        loading: state.loading + 1,
        isLoading: (state.loading + 1 ) > 0,
      };
    case types.LOGIN_USER_SUCCESS:
    case types.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        loading: state.loading - 1,
        isLoading: (state.loading - 1) > 0,
      };
    case types.LOGIN_USER_FAILURE:
    case types.GET_CURRENT_USER_FAILURE:
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
