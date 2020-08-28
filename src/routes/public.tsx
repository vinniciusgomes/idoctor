import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface PropsDTO {
  component: React.FC;
  path: string;
  exact?: boolean;
  location?: React.FC;
}
interface AuthReducer {
  auth: {
    authenticated: boolean;
    token: string | null;
  };
}

const PublicRoutes: React.FC<{
  component: React.FC;
  path: string;
  exact?: boolean;
  location?: React.FC;
}> = ({ component, path, exact, location }: PropsDTO) => {
  const authenticated = useSelector<AuthReducer>(
    state => state.auth.authenticated,
  );

  return authenticated ? (
    <Redirect to={{ pathname: '/', state: { from: location } }} />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};
export default PublicRoutes;
