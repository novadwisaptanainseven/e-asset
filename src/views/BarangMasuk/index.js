import React from "react";
import { Redirect, Route, Switch } from "react-router";
import DataBarangMasuk from "./DataBarangMasuk";
import RiwayatBarangMasuk from "./RiwayatBarangMasuk";

const IndexBarangMasuk = ({ match }) => {
  const { path } = match;
  return (
    <>
      <Switch>
        <Route
          exact
          path={path}
          render={() => <DataBarangMasuk path={path} />}
        />
        <Route
          exact
          path={path + "/riwayat"}
          render={() => <RiwayatBarangMasuk path={path + "/riwayat"} />}
        />
        <Redirect from="/admin/barang/*" to="/admin/index" />
      </Switch>
    </>
  );
};

export default IndexBarangMasuk;
