import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

import SignIn from '../pages/Auth/SignIn';
import Dashboard from '../pages/Dashboard';

import Private from './private';
import Public from './public';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Public path="/acessar" component={SignIn} />
      <Private path="/" exact component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
