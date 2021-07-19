import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import DaftarPenempatan from "./DaftarPenempatan";
import DataBarang from "./DataBarang";
import RiwayatPenempatanBarang from "./RiwayatPenempatanBarang";

const PenempatanBarang = ({ match }) => {
  const { path } = match;

  return (
    <Switch>
      <Route exact path={path} render={() => <DataBarang path={path} />} />
      <Route
        exact
        path={path + `/:id/daftar`}
        render={() => <DaftarPenempatan />}
      />
      <Route
        exact
        path={path + `/riwayat`}
        render={() => <RiwayatPenempatanBarang />}
      />
      <Redirect from="/admin/penempatan-barang/*" to="/admin/index" />
    </Switch>
  );
};

export default PenempatanBarang;
