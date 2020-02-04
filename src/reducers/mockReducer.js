import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default (state = initialState.mock, action ) => {
  switch(action.type) {
    case types.GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case types.CLEAR_DATA:
      return {
        ...state,
        data: null,
      };
    default: return state;
  };
};
