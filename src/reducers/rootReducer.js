import { combineReducers } from 'redux';

/* Reducers */
import appReducer from './appReducer';
import authReducer from './authReducer';
import playerReducer from './playerReducer';

export default combineReducers({
  app: appReducer,
  auth: authReducer,
  player: playerReducer,
});
