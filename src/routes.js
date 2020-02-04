import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignUp from './containers/SignUp';
import SignIn from './containers/SignIn';
import Home from './containers/Home';

export default () => (
  <Switch>
    <Route exact path="/sign-up" component={SignUp} />
    <Route exact path="/sign-in" component={SignIn} />
    <Route exact path="/" component={Home} />
  </Switch>
);
