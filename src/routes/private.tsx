import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface PropsDTO {
  component: React.FC;
  path: string;
  exact: boolean;
}

interface AuthReducer {
  auth: {
    authenticated: boolean;
    token: string | null;
  };
}

const PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
}> = ({ path, exact, component }: PropsDTO) => {
  const authenticated = useSelector<AuthReducer>(
    state => state.auth.authenticated,
  );

  return authenticated ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/acessar" />
  );
};
export default PrivateRoute;
