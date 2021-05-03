import React from "react";
import { Route, Switch, Redirect } from "react-router";
import PengaturanAkun from "./Akun";
import Password from "./Password";

const IndexPengaturanAkun = ({ match }) => {
  const { path } = match;
  return (
    <>
      <Switch>
        <Route
          exact
          path={path}
          render={() => <PengaturanAkun path={path} />}
        />
        <Route
          exact
          path={path + "/password"}
          render={() => <Password path={path + "/password"} />}
        />

        <Redirect from="/admin/pengaturan-akun/*" to="/admin/index" />
      </Switch>
    </>
  );
};

export default IndexPengaturanAkun;
