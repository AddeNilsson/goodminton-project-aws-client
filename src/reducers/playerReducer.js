import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default (state = initialState.player, action) => {
  switch(action.type) {
    case types.SET_INITIAL_PLAYER_DATA_SUCCESS: {
      const { playerData } = action.payload;
      return {
        ...state,
        playerData,
      };
    }
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
    default: return state;
  }
}
