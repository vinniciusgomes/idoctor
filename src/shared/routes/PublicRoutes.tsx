import React from 'react';

import Route from './Route';

import { SignIn, ForgotPassword } from '@shared/pages';

const Routes = () => (
  <>
    <Route path="/" exact component={SignIn} />
    <Route path="/recuperar-senha" component={ForgotPassword} />
  </>
);

export default Routes;
