import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { Routes, UserRole } from "../../constants";
import { useAuth } from "../../hooks/useAuth";
import Login from "./Login";
import SignUp from './SignUp';
import SignUpSuccess from "./SignUpSuccess";

const AuthPage = () => {
  const { authUser, isFetchingAuthUser } = useAuth();
  if (isFetchingAuthUser) {
    return null;
  }
  if (authUser) {
    if (authUser.role === UserRole.ADMIN) {
      return <Redirect to="/admin" />;
    }
    if (authUser.role === UserRole.TRADER) {
      return <Redirect to="/trader" />;
    }
  }
  return !authUser ? (
    <Switch>
      <Route exact path={Routes.LOGIN} component={Login} />
      <Route exact path={Routes.SIGN_UP} component={SignUp} />
      <Route exact path={Routes.SIGN_UP_SUCCESS} component={SignUpSuccess} />
      <Redirect from="/auth" to={Routes.LOGIN} />
    </Switch>
  ) : null;
};

export default AuthPage;
