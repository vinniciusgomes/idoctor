import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
}> = props => {
  const isAuthenticated = false;

  return isAuthenticated ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to="/acessar" />
  );
};
export default PrivateRoute;
