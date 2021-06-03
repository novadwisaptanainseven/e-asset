import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Users from "./DataUser";
import TambahUser from "./TambahUser";

const IndexUsers = ({ match }) => {
  const { path } = match;
  return (
    <>
      <Switch>
        <Route exact path={path} render={() => <Users path={path} />} />
        <Route exact path={path + "/tambah"} render={() => <TambahUser />} />

        <Redirect from="/admin/users/*" to="/admin/index" />
      </Switch>
    </>
  );
};

export default IndexUsers;
