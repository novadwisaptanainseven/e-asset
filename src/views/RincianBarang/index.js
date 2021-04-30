import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import {
	Card,
	Col,
	Row,
	CardHeader,
	CardBody,
	Button,
	CardFooter,
	FormGroup,
	Label,
	Input,
	Table,
} from "reactstrap";
import { handleDelete } from "./functions";
import ModalTambah from "./ModalTambah";

const RincianBarang = () => {
	const match = useRouteMatch();
	const { params } = match;
	const [modal, setModal] = useState(false);
	const [bidang, setBidang] = useState("");

	useEffect(() => {
		console.log(params);
	}, [params]);

	return (
		<>
			<Row>
				<Col>
					<Card className="shadow">
						<CardHeader>
							<h2>Rincian Barang</h2>
						</CardHeader>
						<CardBody>
							<Row>
								<Col md="4">
									<FormGroup>
										<Label>Barang</Label>
										<Input
											type="select"
											name="barang"
											id="barang"
											value={bidang}
											onChange={(e) => setBidang(e.target.value)}
										>
											<option value="">-- Pilih Barang --</option>
											<option value="komputer">Komputer</option>
											<option value="komputer">Komputer</option>
											<option value="komputer">Komputer</option>
										</Input>
									</FormGroup>
								</Col>
							</Row>
							<Row>
								<Col>
									<Button
										color="primary"
										className="mb-3"
										onClick={() => setModal(!modal)}
										disabled={!bidang ? true : false}
									>
										Tambah Rincian
									</Button>
									<Table className="align-items-center" responsive>
										<thead className="thead-light">
											<tr>
												<th scope="col">No</th>
												<th scope="col">Bidang</th>
												<th scope="col">Jumlah Baik</th>
												<th scope="col">Jumlah Rusak</th>
												<th scope="col">Jumlah Rusak Ringan</th>
												<th scope="col">Aksi</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1</td>
												<td>Permukiman</td>
												<td>10</td>
												<td>10</td>
												<td>10</td>
												<td>
													<Button
														color="danger"
														size="sm"
														onClick={() => handleDelete(1)}
													>
														<i className="fas fa-trash"></i>
													</Button>
												</td>
											</tr>
											<tr>
												<td>2</td>
												<td>Permukiman</td>
												<td>10</td>
												<td>10</td>
												<td>10</td>
												<td>
													<Button
														color="danger"
														size="sm"
														onClick={() => handleDelete(2)}
													>
														<i className="fas fa-trash"></i>
													</Button>
												</td>
											</tr>
											<tr>
												<td>3</td>
												<td>Permukiman</td>
												<td>10</td>
												<td>10</td>
												<td>10</td>
												<td>
													<Button
														color="danger"
														size="sm"
														onClick={() => handleDelete(3)}
													>
														<i className="fas fa-trash"></i>
													</Button>
												</td>
											</tr>
										</tbody>
									</Table>
								</Col>
							</Row>
						</CardBody>
						<CardFooter className="text-right"></CardFooter>
					</Card>
				</Col>
			</Row>

			{/* Modal Tambah */}
			<ModalTambah modal={modal} setModal={setModal} />
		</>
	);
};

export default RincianBarang;
