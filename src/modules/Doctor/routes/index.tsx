import React from 'react';

import Route from './Route';

import { Dashboard, Schedule, Patients, Settings } from '../pages';

const Routes = () => (
  <>
    <Route path="/" exact component={Dashboard} isPrivate />
    <Route path="/agenda" component={Schedule} isPrivate />
    <Route path="/pacientes" component={Patients} isPrivate />
    <Route path="/configuracoes" component={Settings} isPrivate />
  </>
);

export default Routes;
