import * as types from '../constants/actionTypes';
import {
  getPlayerDataRequest,
  updatePlayerDataRequest,
  getPlayersDataRequest,
} from '../api/';

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

export const getPlayersData = () => {
  return dispatch => {
    dispatch(getPlayersDataRequested())
    return getPlayersDataRequest()
      .then(data => dispatch(getPlayersDataSuccess(data)))
      .catch(error => {
        console.error(error);
        dispatch(getPlayersDataFailure(error));
      });
  }
}

const getPlayersDataRequested = () => ({
  type: types.GET_PLAYERS_DATA_REQUESTED,
})

const getPlayersDataSuccess = (data) => ({
  type: types.GET_PLAYERS_DATA_SUCCESS,
  payload: data,
});

const getPlayersDataFailure = error => ({
  type: types.GET_PLAYERS_DATA_FAILURE,
  payload: error,
});
