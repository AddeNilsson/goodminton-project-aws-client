import initialState from './initialState';
import * as types from '../constants/actionTypes';

const sortByRatio = (a, b) => (
  a.winRatio > b.winRatio ? -1 : a.winRatio < b.winRatio ? 1 : 0
);

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
    case types.GET_PLAYERS_DATA_SUCCESS: {
      const sorted = action.payload.sort(sortByRatio);
      console.log(sorted);
      return {
        ...state,
        playersData: action.payload,
      };
    }
    case types.SIGN_OUT_USER_SUCCESS: {
      return initialState.player;
    }
    default: return state;
  }
}
