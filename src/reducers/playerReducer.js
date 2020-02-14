import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default (state = initialState.player, action) => {
  switch(action.type) {
    case types.GET_PLAYER_DATA_SUCCESS: {
      return {
        ...state,
        playerData: action.payload,
      };
    }
    case types.UPDATE_PLAYER_DATA_SUCCESS: {
      return {
        ...state,
        playerData: action.payload,
      };
    }
    case types.SIGN_OUT_USER_SUCCESS:
      return initialState.player;
    default: return state;
  }
}
