import { FotoBarangSample } from "assets";
import React, { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router";
import {
	Card,
	Col,
	Row,
	CardHeader,
	CardBody,
	Button,
	CardFooter,
	Table,
} from "reactstrap";
import { goBackToPrevPage } from "../functions";

const DetailBarang = () => {
	const history = useHistory();
	const match = useRouteMatch();
	const { params } = match;

	useEffect(() => {
		console.log(params);
	}, [params]);

	return (
		<>
			<Row>
				<Col>
					<Card className="shadow">
						<CardHeader>
							<h2>
								<i
									onClick={() => goBackToPrevPage(history)}
									style={{ cursor: "pointer" }}
									className="fas fa-long-arrow-alt-left text-primary mr-3"
								></i>{" "}
								Detail Barang
							</h2>
						</CardHeader>
						<CardBody className="bg-secondary">
							<div
							//  className="pl-lg-4"
							>
								<Row className="mb-4">
									<Col md="6">
										<h6 className="heading-small text-muted mb-2">
											Deskripsi Barang
										</h6>
										<hr className="my-3" />
										<table cellPadding={4} style={{ width: "100%" }}>
											<tbody>
												<tr>
													<th width={150}>No. Barang</th>
													<th width={40}>:</th>
													<td>123</td>
												</tr>
												<tr>
													<th>Nama Barang</th>
													<th>:</th>
													<td>Lorem</td>
												</tr>
												<tr>
													<th>Merk</th>
													<th>:</th>
													<td>Lorem</td>
												</tr>
												<tr>
													<th>No. Seri Pabrik</th>
													<th>:</th>
													<td>Lorem</td>
												</tr>
												<tr>
													<th>Ukuran</th>
													<th>:</th>
													<td>10x10</td>
												</tr>
												<tr>
													<th>Bahan</th>
													<th>:</th>
													<td>Lorem</td>
												</tr>
												<tr>
													<th>Tahun</th>
													<th>:</th>
													<td>2021</td>
												</tr>
												<tr>
													<th>Harga</th>
													<th>:</th>
													<td>Rp. 1.000.000</td>
												</tr>
												<tr>
													<th>Keterangan</th>
													<th>:</th>
													<td>
														Lorem ipsum dolor sit amet consectetur adipisicing
														elit. Repellat deserunt doloribus deleniti quibusdam
														ullam unde natus dolorem ad doloremque? Pariatur,
														reiciendis voluptatum quos harum illum nam voluptate
														numquam corporis blanditiis.
													</td>
												</tr>
												<tr>
													<th>File</th>
													<th>:</th>
													<td>Lorem.pdf</td>
												</tr>
											</tbody>
										</table>
									</Col>
									<Col md="6">
										<Card>
											<CardHeader>
												<h3 className="mb-0">Foto Barang</h3>
											</CardHeader>
											<CardBody>
												<img
													src={FotoBarangSample}
													alt="foto-barang"
													width="100%"
												/>
											</CardBody>
										</Card>
									</Col>
								</Row>
								<Row>
									<Col>
										<h6 className="heading-small text-muted mb-2">
											Bidang - bidang yang menggunakan barang
										</h6>
										<Table className="align-items-center table-dark" responsive>
											<thead className="thead-dark">
												<tr>
													<th scope="col">No</th>
													<th scope="col">Bidang</th>
													<th scope="col">Jumlah Baik</th>
													<th scope="col">Jumlah Rusak</th>
													<th scope="col">Jumlah Rusak Ringan</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>1</td>
													<td>Perumahan</td>
													<td>10</td>
													<td>10</td>
													<td>10</td>
												</tr>
												<tr>
													<td>2</td>
													<td>Permukiman</td>
													<td>10</td>
													<td>10</td>
													<td>10</td>
												</tr>
												<tr>
													<td>3</td>
													<td>Sekretariat</td>
													<td>10</td>
													<td>10</td>
													<td>10</td>
												</tr>
											</tbody>
										</Table>
										<Button color="info" className="mt-2">
											Edit
										</Button>
									</Col>
								</Row>
							</div>
						</CardBody>
						<CardFooter className="text-right"></CardFooter>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default DetailBarang;
