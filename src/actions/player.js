import * as types from '../constants/actionTypes';
import {
  setInitialPlayerDataRequest,
  getPlayerDataRequest,
  updatePlayerDataRequest,
} from '../api/';

export const setInitialPlayerData = (payload) => {
  return dispatch => {
    dispatch(setInitialPlayerDataRequested())
    return setInitialPlayerDataRequest(payload)
      .then(data => dispatch(setInitialPlayerDataSuccess(data)))
      .catch(error => {
        console.error(error);
        dispatch(setInitialPlayerDataFailure('Failed set initial data'));
      });
  }
}

const setInitialPlayerDataRequested = () => ({
  type: types.SET_INITIAL_PLAYER_DATA_REQUESTED,
})

const setInitialPlayerDataSuccess = (data) => ({
  type: types.SET_INITIAL_PLAYER_DATA_SUCCESS,
  payload: data,
});

const setInitialPlayerDataFailure = error => ({
  type: types.SET_INITIAL_PLAYER_DATA_FAILURE,
  payload: error,
});

export const getPlayerData = ({ id }) => {
  return dispatch => {
    dispatch(getPlayerDataRequested())
    return getPlayerDataRequest({ id })
      .then(data => dispatch(getPlayerDataSuccess(data)))
      .catch(error => {
        console.error(error);
        dispatch(getPlayerDataFailure('Failed getting player data.'));
      });
  }
}

const getPlayerDataRequested = () => ({
  type: types.GET_PLAYER_DATA_REQUESTED,
})

const getPlayerDataSuccess = (data) => ({
  type: types.GET_PLAYER_DATA_SUCCESS,
  payload: data,
});

const getPlayerDataFailure = error => ({
  type: types.GET_PLAYER_DATA_FAILURE,
  payload: error,
});

export const registerGame = data => {
  return (dispatch, getState) => {
    const { player: { playerData } } = getState();
    const payload = {
      ...playerData,
      ...data,
    };
    dispatch(updatePlayerDataRequested())
    return updatePlayerDataRequest(payload)
      .then(data => dispatch(updatePlayerDataSuccess(data)))
      .catch(e => {
        console.error(e);
        dispatch(updatePlayerDataFailure(e));
      });
  }
}

const updatePlayerDataRequested = () => ({
  type: types.UPDATE_PLAYER_DATA_REQUESTED,
})

const updatePlayerDataSuccess = (data) => ({
  type: types.UPDATE_PLAYER_DATA_SUCCESS,
  payload: data,
});

const updatePlayerDataFailure = error => ({
  type: types.UPDATE_PLAYER_DATA_FAILURE,
  payload: error,
});
