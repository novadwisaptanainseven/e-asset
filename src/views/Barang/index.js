import React from "react";
import { Redirect, Route, Switch } from "react-router";
import DataBarang from "./DataBarang";
import TambahBarang from "./TambahBarang";

const Barang = () => {
	return (
		<>
			<Switch>
				<Route exact path="/admin/barang/" render={() => <DataBarang />} />
				<Route
					exact
					path="/admin/barang/tambah"
					render={() => <TambahBarang />}
				/>
				<Redirect from="/admin/barang/*" to="/admin/index" />
			</Switch>
		</>
	);
};

export default Barang;
