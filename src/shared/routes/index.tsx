import React, { useEffect } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

import Route from './Route';
import DoctorRoutes from '@doctor/routes';

import { SignIn } from '@shared/pages';
import { useAuth } from '@shared/hooks/auth';

const Routes = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Switch>
        {!user && <Route path="/" component={SignIn} />}
        {user && user.type === 1 && <DoctorRoutes />}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
