import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { Routes, UserRole } from "../../constants";
import { useAuth } from "../../hooks/useAuth";
import Login from "./Login";
// import SignUp from "./SignUp";
import SignUp1 from "./SignUp1";
import SignUp2 from "./SignUP2";
import SignUp3 from "./SignUp3";

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
      {/* <Route exact path={Routes.SIGN_UP} component={SignUp} /> */}
      <Route exact path={Routes.SIGN_UP1} component={SignUp1} />
      <Route exact path={Routes.SIGN_UP2} component={SignUp2} />
      <Route exact path={Routes.SIGN_UP3} component={SignUp3} />
      <Redirect from="/auth" to={Routes.LOGIN} />
    </Switch>
  ) : null;
};

export default AuthPage;
