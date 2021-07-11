import React from "react";
import { Redirect, Route, Switch } from "react-router";
import DataRuangan from "./DataRuangan";
import EditKategori from "./EditRuangan";
import TambahKategori from "./TambahRuangan";

const Ruangan = ({ match }) => {
  const { path } = match;
  return (
    <>
      <Switch>
        <Route exact path={path} render={() => <DataRuangan path={path} />} />
        <Route
          exact
          path={path + "/tambah"}
          render={() => <TambahKategori />}
        />
        <Route
          exact
          path={path + "/:id/edit"}
          render={() => <EditKategori />}
        />
        <Redirect from="/admin/kategori/*" to="/admin/index" />
      </Switch>
    </>
  );
};

export default Ruangan;
