import initialState from './initialState';
import * as types from '../constants/actionTypes';

const sortByRatio = (a, b) => (
  a.winRatio > b.winRatio ? -1 : a.winRatio < b.winRatio ? 1 : 0
);

export default (state = initialState.players, action) => {
  switch(action.type) {
    case types.GET_PLAYERS_DATA_SUCCESS: {
      const sorted = action.payload.sort(sortByRatio);
      return {
        ...state,
        data: sorted,
      };
    }
    case types.SIGN_OUT_USER_SUCCESS:
      return initialState.players;
    default: return state;
  }
}
