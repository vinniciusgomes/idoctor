import React from 'react';

import Route from './Route';

import { Dashboard, Graphics, Users, Settings } from '../pages';

const Routes = () => (
  <>
    <Route path="/" exact component={Dashboard} isPrivate />
    <Route path="/graficos" component={Graphics} isPrivate />
    <Route path="/usuarios" component={Users} isPrivate />
    <Route path="/configuracoes" component={Settings} isPrivate />
  </>
);

export default Routes;
