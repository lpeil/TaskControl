import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Sign/login';
import SignUp from '../pages/Sign/signup';

const UnLogged = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  )
}

export default UnLogged;
