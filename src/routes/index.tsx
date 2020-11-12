import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

import Route from './Route';

import {
  SignIn, Dashboard, Schedule, Patients, Settings,
} from '../pages';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/acessar" component={SignIn} />
      <Route path="/" exact component={Dashboard} isPrivate />
      <Route path="/agenda" component={Schedule} isPrivate />
      <Route path="/pacientes" component={Patients} isPrivate />
      <Route path="/configuracoes" component={Settings} isPrivate />
    </Switch>
  </BrowserRouter>
);

export default Routes;
