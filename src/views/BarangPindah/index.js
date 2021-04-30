import React from "react";
import { Redirect, Route, Switch } from "react-router";
import DataBarangPindah from "./DataBarangPindah";

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
				<Redirect from="/admin/barang/*" to="/admin/index" />
			</Switch>
		</>
	);
};

export default IndexBarangPindah;
