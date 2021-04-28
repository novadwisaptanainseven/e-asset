import React from "react";
import { Redirect, Route, Switch } from "react-router";
import DataBarang from "./DataBarang";
import TambahBarang from "./TambahBarang";

const Barang = ({match}) => {
	const {path} = match;
	return (
		<>
			<Switch>
				<Route exact path={path} render={() => <DataBarang path={path} />} />
				<Route
					exact
					path={path + '/tambah'}
					render={() => <TambahBarang />}
				/>
				<Redirect from="/admin/barang/*" to="/admin/index" />
			</Switch>
		</>
	);
};

export default Barang;
