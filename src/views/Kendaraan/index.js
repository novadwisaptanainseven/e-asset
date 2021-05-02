import React from "react";
import { Redirect, Route, Switch } from "react-router";
import DataKendaraan from "./DataKendaraan";
import DetailKendaraan from "./DetailKendaraan";
import EditKendaraan from "./EditKendaraan";
import TambahKendaraan from "./TambahKendaraan";

const Kendaraan = ({ match }) => {
  const { path } = match;
  return (
    <>
      <Switch>
        <Route exact path={path} render={() => <DataKendaraan path={path} />} />
        <Route
          exact
          path={path + "/tambah"}
          render={() => <TambahKendaraan />}
        />
        <Route
          exact
          path={path + "/:id/edit"}
          render={() => <EditKendaraan />}
        />
        <Route
          exact
          path={path + "/:id/detail"}
          render={() => <DetailKendaraan />}
        />
        <Redirect from="/admin/kendaraan/*" to="/admin/index" />
      </Switch>
    </>
  );
};

export default Kendaraan;
