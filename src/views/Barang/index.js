import React from "react";
import { Redirect, Route, Switch } from "react-router";
import DataBarang from "./DataBarang";
import DetailBarang from "./DetailBarang";
import EditBarang from "./EditBarang";
import TambahBarang from "./TambahBarang";

const Barang = ({ match }) => {
	const { path } = match;
	return (
		<>
			<Switch>
				<Route exact path={path} render={() => <DataBarang path={path} />} />
				<Route exact path={path + "/tambah"} render={() => <TambahBarang />} />
				<Route exact path={path + "/:id/edit"} render={() => <EditBarang />} />
				<Route exact path={path + "/:id/detail"} render={() => <DetailBarang />} />
				<Redirect from="/admin/barang/*" to="/admin/index" />
			</Switch>
		</>
	);
};

export default Barang;
