import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import {
	Card,
	Col,
	Row,
	CardHeader,
	CardBody,
	Form,
	FormGroup,
	Input,
	Button,
	CardFooter,
} from "reactstrap";
import { goBackToPrevPage } from "../functions";

const EditBarang = () => {
	const history = useHistory();
	const match = useRouteMatch();
	const { params } = match;
	const [selectedFile, setSelectedFile] = useState();
	const [preview, setPreview] = useState();

	useEffect(() => {
		console.log(params);
	}, [params]);

	// Menangani preview input gambar setelah dipilih
	const handleSelectedFile = useCallback(() => {
		if (!selectedFile) {
			setPreview(null);
			return;
		}

		const objectUrl = URL.createObjectURL(selectedFile);
		setPreview(objectUrl);

		return () => URL.revokeObjectURL(objectUrl);
	}, [selectedFile]);

	const onSelectFile = (e) => {
		if (!e.target.files || e.target.files.length === 0) {
			setSelectedFile(undefined);
			return;
		}

		setSelectedFile(e.target.files[0]);
	};

	useEffect(() => {
		handleSelectedFile();
	}, [handleSelectedFile]);

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
								Edit Barang
							</h2>
						</CardHeader>
						<CardBody className="bg-secondary">
							<Form>
								<div className="pl-lg-4">
									<Row>
										<Col lg="6">
											<FormGroup>
												<label
													className="form-control-label"
													htmlFor="no_barang"
												>
													No. Barang
												</label>
												<Input
													className="form-control-alternative"
													id="no_barang"
													name="no_barang"
													placeholder="No. Barang"
													type="text"
												/>
											</FormGroup>
											<FormGroup>
												<label
													className="form-control-label"
													htmlFor="nama_barang"
												>
													Nama Barang
												</label>
												<Input
													className="form-control-alternative"
													id="nama_barang"
													placeholder="Nama Barang"
													type="text"
													name="nama_barang"
												/>
											</FormGroup>
											<FormGroup>
												<label className="form-control-label" htmlFor="tahun">
													Tahun
												</label>
												<Input
													className="form-control-alternative"
													id="tahun"
													placeholder="Tahun"
													type="number"
												/>
											</FormGroup>
											<FormGroup>
												<label className="form-control-label" htmlFor="merk">
													Merk
												</label>
												<Input
													className="form-control-alternative"
													id="merk"
													placeholder="Merk"
													type="text"
												/>
											</FormGroup>
											<FormGroup>
												<label
													className="form-control-label"
													htmlFor="no_seri_pabrik"
												>
													No. Seri Pabrik
												</label>
												<Input
													className="form-control-alternative"
													id="no_seri_pabrik"
													placeholder="No. Seri Pabrik"
													type="text"
												/>
											</FormGroup>
											<FormGroup>
												<label className="form-control-label" htmlFor="ukuran">
													Ukuran
												</label>
												<Input
													className="form-control-alternative"
													id="ukuran"
													placeholder="Ukuran"
													type="text"
												/>
											</FormGroup>
											<FormGroup>
												<label className="form-control-label" htmlFor="bahan">
													Bahan
												</label>
												<Input
													className="form-control-alternative"
													id="bahan"
													placeholder="Bahan"
													type="text"
												/>
											</FormGroup>
										</Col>
										<Col>
											<FormGroup>
												<label className="form-control-label" htmlFor="harga">
													Harga
												</label>
												<Input
													className="form-control-alternative"
													id="harga"
													placeholder="Harga"
													type="number"
												/>
											</FormGroup>
											<FormGroup>
												<label
													className="form-control-label"
													htmlFor="keterangan"
												>
													Keterangan
												</label>

												<textarea
													name="keterangan"
													id="keterangan"
													placeholder="Keterangan"
													rows="3"
													className="form-control border-0"
													style={{
														boxShadow: "1px 1px 4px rgba(0,0,0,0.15)",
													}}
												/>
											</FormGroup>
											<FormGroup>
												<label className="form-control-label" htmlFor="file">
													File
												</label>
												<Input
													className="form-control-alternative"
													id="file"
													placeholder="File"
													type="file"
												/>
											</FormGroup>
											<FormGroup>
												<label className="form-control-label" htmlFor="foto">
													Foto
												</label>
												<Input
													className="form-control-alternative mb-3"
													id="foto"
													placeholder="Foto"
													type="file"
													onChange={(e) => onSelectFile(e)}
												/>
												{preview && (
													<img
														src={preview}
														alt="img-preview"
														className="img-thumbnail"
														width={180}
													/>
												)}
											</FormGroup>
										</Col>
									</Row>
								</div>
							</Form>
						</CardBody>
						<CardFooter className="text-right">
							<Button color="primary">Simpan</Button>
						</CardFooter>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default EditBarang;
