import * as types from '../constants/actionTypes';
import {
  createLogRequest,
  getPlayerLogsRequest,
} from '../api';

export const createLog = (payload) => {
  return (dispatch) => {
    dispatch(createLogRequested())
    return createLogRequest(payload)
      .then(data => dispatch(createLogSuccess(data)))
      .catch(e => {
        console.error(e);
        dispatch(createLogFailure(e));
      });
  }
};

const createLogRequested = () => ({
  type: types.CREATE_PLAYER_LOG_REQUESTED,
})

const createLogSuccess = (data) => ({
  type: types.CREATE_PLAYER_LOG_SUCCESS,
  payload: data,
});

const createLogFailure = error => ({
  type: types.CREATE_PLAYER_LOG_FAILURE,
  payload: error,
});

export const getPlayerLogs = (payload) => {
  return (dispatch) => {
    dispatch(getPlayerLogsRequested())
    return getPlayerLogsRequest(payload)
      .then(data => dispatch(getPlayerLogsSuccess(data)))
      .catch(e => {
        console.error(e);
        dispatch(getPlayerLogsFailure(e));
      });
  }
};

const getPlayerLogsRequested = () => ({
  type: types.GET_PLAYER_LOGS_REQUESTED,
})

const getPlayerLogsSuccess = (data) => ({
  type: types.GET_PLAYER_LOGS_SUCCESS,
  payload: data,
});

const getPlayerLogsFailure = error => ({
  type: types.GET_PLAYER_LOGS_FAILURE,
  payload: error,
});
