import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

import Route from './Route';

import DoctorRoutes from '@doctor/routes';
import ManagerRoutes from '@manager/routes';
import SecretaryRoutes from '@secretary/routes';

import { SignIn } from '@shared/pages';
import { useAuth } from '@shared/hooks/auth';

const Routes = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Switch>
        {!user && <Route path="/" component={SignIn} />}
        {user && user.type === 1 && <ManagerRoutes />}
        {user && user.type === 2 && <DoctorRoutes />}
        {user && user.type === 3 && <SecretaryRoutes />}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
