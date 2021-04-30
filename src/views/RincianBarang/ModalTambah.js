import React from "react";
import {
	Modal,
	Button,
	Row,
	Col,
	Form,
	Input,
	FormGroup,
	Label,
} from "reactstrap";

const ModalTambah = ({ modal, setModal }) => {
	return (
		<>
			<Modal
				className="modal-dialog-centered"
				isOpen={modal}
				toggle={() => setModal(!modal)}
				size="lg"
			>
				<div className="modal-header">
					<h3 className="modal-title" id="modal-title-default">
						Tambah Rincian Barang <br />
						<br />
						<span className="text-muted">Komputer</span>
					</h3>
					<button
						aria-label="Close"
						className="close"
						data-dismiss="modal"
						type="button"
						onClick={() => setModal(false)}
					>
						<span aria-hidden={true}>×</span>
					</button>
				</div>
				<Form>
					<div className="modal-body">
						<Row>
							<Col>
								<FormGroup>
									<Label>Bidang</Label>
									<Input type="select" id="bidang" name="bidang">
										<option value="">-- Pilih Bidang --</option>
										<option value="permukiman">Permukiman</option>
										<option value="permukiman">Permukiman</option>
										<option value="permukiman">Permukiman</option>
									</Input>
								</FormGroup>
								<FormGroup>
									<Label>Jumlah Baik</Label>
									<Input
										type="number"
										id="jumlah_baik"
										name="jumlah_baik"
										placeholder="Jumlah Baik"
									/>
								</FormGroup>
							</Col>
							<Col>
								<FormGroup>
									<Label>Jumlah Rusak</Label>
									<Input
										type="number"
										id="jumlah_rusak"
										name="jumlah_rusak"
										placeholder="Jumlah Rusak"
									/>
								</FormGroup>
								<FormGroup>
									<Label>Jumlah Rusak Ringan</Label>
									<Input
										type="number"
										id="jumlah_rusak_ringan"
										name="jumlah_rusak_ringan"
										placeholder="Jumlah Rusak Ringan"
									/>
								</FormGroup>
							</Col>
						</Row>
					</div>
					<div className="modal-footer">
						<Button color="primary" type="button">
							Simpan
						</Button>
						<Button
							className="ml-auto"
							color="link"
							data-dismiss="modal"
							type="button"
							onClick={() => setModal(false)}
						>
							Tutup
						</Button>
					</div>
				</Form>
			</Modal>
		</>
	);
};

export default ModalTambah;
