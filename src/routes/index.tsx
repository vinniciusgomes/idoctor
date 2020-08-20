import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

import SignIn from "../pages/Auth/SignIn";
import Dashboard from "../pages/Dashboard";

import history from "./history";
import Private from "./private";

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/acessar" component={SignIn} />
      <Private path="/" exact component={Dashboard} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
