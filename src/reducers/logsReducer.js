import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default (state = initialState.logs, action) => {
  switch(action.type) {
    case types.GET_PLAYER_LOGS_REQUESTED:
    case types.CREATE_PLAYER_LOG_REQUESTED:
      return {
        ...state,
        loading: state.loading + 1,
        isLoading: (state.loading + 1 ) > 0,
      };
    case types.GET_PLAYER_LOGS_SUCCESS: {
      return {
        ...state,
        playerLogs: action.payload,
        loading: state.loading - 1,
        isLoading: (state.loading - 1) > 0,
      };
    }
    case types.CREATE_PLAYER_LOG_SUCCESS: {
      return {
        ...state,
        playerLogs: [action.payload, ...state.playerLogs],
        loading: state.loading - 1,
        isLoading: (state.loading - 1) > 0,
      };
    }

    case types.GET_PLAYER_LOGS_FAILURE:
    case types.CREATE_PLAYER_LOG_FAILURE:
      let errors = [...state.errors, action.payload]
      return {
        ...state,
        errors,
        loading: state.loading - 1,
        isLoading: (state.loading - 1) > 0,
      };
    case types.SIGN_OUT_USER_SUCCESS:
      return initialState.logs;
    default: return state;
    }
};
