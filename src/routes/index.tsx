import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Private from './private';
import Public from './public';

import {
  SignIn, Dashboard, Schedule, Patients, Settings,
} from '../pages';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/acessar" component={SignIn} />
      <Route path="/" exact component={Dashboard} />
      <Route path="/agenda" component={Schedule} />
      <Route path="/pacientes" component={Patients} />
      <Route path="/configuracoes" component={Settings} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
