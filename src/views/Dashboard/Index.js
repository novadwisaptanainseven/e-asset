/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// javascipt plugin for creating charts
import Chart from "chart.js";
// reactstrap components
import { Card, CardBody, Row, Col, CardTitle } from "reactstrap";

// core components
import { chartOptions, parseOptions } from "variables/charts.js";

const Index = (props) => {
	if (window.Chart) {
		parseOptions(Chart, chartOptions());
	}
	return (
		<>
			<Row className="mb-3 mt-4">
				<Col>
					<Card className="shadow-sm">
						<CardBody>
							<h1>Halo Nova Dwi Sapta!</h1>
							<h2 className="font-weight-normal">
								Selamat Datang di Aplikasi E-Asset DISPERKIM
							</h2>
						</CardBody>
					</Card>
				</Col>
			</Row>

			{/* Cards */}
			<Row className="mb-4">
				<Col lg="6" xl="3">
					<Card className="card-stats mb-4 mb-xl-0 shadow-sm">
						<CardBody>
							<Row>
								<div className="col">
									<CardTitle
										tag="h5"
										className="text-uppercase text-muted mb-0"
									>
										Total Barang
									</CardTitle>
									<span className="h2 font-weight-bold mb-0">99</span>
								</div>
								<Col className="col-auto">
									<div className="icon icon-shape bg-danger text-white rounded-circle shadow">
										<i className="fas fa-briefcase" />
									</div>
								</Col>
							</Row>
						</CardBody>
					</Card>
				</Col>
				<Col lg="6" xl="3">
					<Card className="card-stats mb-4 mb-xl-0 shadow-sm">
						<CardBody>
							<Row>
								<div className="col">
									<CardTitle
										tag="h5"
										className="text-uppercase text-muted mb-0"
									>
										Total Kendaraan
									</CardTitle>
									<span className="h2 font-weight-bold mb-0">99</span>
								</div>
								<Col className="col-auto">
									<div className="icon icon-shape bg-warning text-white rounded-circle shadow">
										<i className="fas fa-car" />
									</div>
								</Col>
							</Row>
						</CardBody>
					</Card>
				</Col>
				<Col lg="6" xl="3">
					<Card className="card-stats mb-4 mb-xl-0 shadow-sm">
						<CardBody>
							<Row>
								<div className="col">
									<CardTitle
										tag="h5"
										className="text-uppercase text-muted mb-0"
									>
										Riwayat Barang Pindah
									</CardTitle>
									<span className="h2 font-weight-bold mb-0">99</span>
								</div>
								<Col className="col-auto">
									<div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
										<i className="fas fa-people-carry" />
									</div>
								</Col>
							</Row>
						</CardBody>
					</Card>
				</Col>
				<Col lg="6" xl="3">
					<Card className="card-stats mb-4 mb-xl-0 shadow-sm">
						<CardBody>
							<Row>
								<div className="col">
									<CardTitle
										tag="h5"
										className="text-uppercase text-muted mb-0"
									>
										Riwayat Kendaraan Pindah
									</CardTitle>
									<span className="h2 font-weight-bold mb-0">99</span>
								</div>
								<Col className="col-auto">
									<div className="icon icon-shape bg-info text-white rounded-circle shadow">
										<i className="fas fa-truck-moving" />
									</div>
								</Col>
							</Row>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default Index;
