import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoutes: React.FC<{
  component: React.FC;
  path: string;
  exact?: boolean;
  location?: React.FC;
}> = props => {
  const isAuthenticated = false;

  return isAuthenticated ? (
    <Redirect to={{ pathname: '/', state: { from: props.location } }} />
  ) : (
    <Route path={props.path} exact={props.exact} component={props.component} />
  );
};
export default PublicRoutes;
