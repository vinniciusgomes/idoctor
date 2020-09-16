import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

import Private from './private';
import Public from './public';

import { SignIn, Dashboard, Schedule, Patients, Settings } from '../pages';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Public path="/acessar" component={SignIn} />
      <Private path="/" exact component={Dashboard} />
      <Private path="/agenda" component={Schedule} />
      <Private path="/pacientes" component={Patients} />
      <Private path="/configuracoes" component={Settings} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
