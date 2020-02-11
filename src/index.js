import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';

import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import config from './config';

import { getPlayersData } from './actions';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
  Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
    identityPoolId: config.cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: "player",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      },
    ]
  }
});

const stateProperty = (state) => {
  return state.player.playerData.touched;
}

let current
const onPlayerDataChange = () => {
  let previous = current
  current = stateProperty(store.getState())
  if (previous < current) {
    store.dispatch(getPlayersData());
  }
}

store.subscribe(onPlayerDataChange);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
