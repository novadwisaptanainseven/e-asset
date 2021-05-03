import React from "react";
import { Redirect, Route, Switch } from "react-router";
import DataKendaraanPindah from "./DataKendaraanPindah";
import RiwayatKendaraanPindah from "./RiwayatKendaraanPindah";

const IndexKendaraanPindah = ({ match }) => {
  const { path } = match;
  return (
    <>
      <Switch>
        <Route
          exact
          path={path}
          render={() => <DataKendaraanPindah path={path} />}
        />
        <Route
          exact
          path={path + "/riwayat"}
          render={() => <RiwayatKendaraanPindah path={path + "/riwayat"} />}
        />
        <Redirect from="/admin/barang/*" to="/admin/index" />
      </Switch>
    </>
  );
};

export default IndexKendaraanPindah;
