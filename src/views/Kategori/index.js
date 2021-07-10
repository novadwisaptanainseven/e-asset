import React from "react";
import { Redirect, Route, Switch } from "react-router";
import DataKategori from "./DataKategori";
import EditKategori from "./EditKategori";
import TambahKategori from "./TambahKategori";

const Kategori = ({ match }) => {
  const { path } = match;
  return (
    <>
      <Switch>
        <Route exact path={path} render={() => <DataKategori path={path} />} />
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

export default Kategori;
