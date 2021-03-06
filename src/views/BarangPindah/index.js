import React from "react";
import { Redirect, Route, Switch } from "react-router";
import DataBarangPindah from "./DataBarangPindah";
import RiwayatBarangPindah from "./RiwayatBarangPindah";

const IndexBarangPindah = ({ match }) => {
  const { path } = match;
  return (
    <>
      <Switch>
        <Route
          exact
          path={path}
          render={() => <DataBarangPindah path={path} />}
        />
        <Route
          exact
          path={path + "/riwayat"}
          render={() => <RiwayatBarangPindah path={path + "/riwayat"} />}
        />
        <Redirect from="/admin/barang/*" to="/admin/index" />
      </Switch>
    </>
  );
};

export default IndexBarangPindah;
