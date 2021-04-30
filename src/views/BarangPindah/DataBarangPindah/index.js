import barangPindah from "assets/dummyData/barangPindah";
import customStyles from "datatableStyle/customStyles";
import { FilterComponent } from "datatableStyle/filterPencarian";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
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
} from "reactstrap";
import ModalTambah from "../ModalTambah";

const DataBarangPindah = () => {
	const match = useRouteMatch();
	const { params } = match;
	const [modal, setModal] = useState(false);
	const [bidang, setBidang] = useState("");
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
	const [filterText, setFilterText] = useState("");

	useEffect(() => {
		console.log(params);
	}, [params]);

	const filteredData = barangPindah.filter((item) => {
		if (item.tanggal && item.dari_bidang && item.ke_bidang && item.keterangan) {
			if (
				item.tanggal.toLowerCase().includes(filterText.toLowerCase()) ||
				item.dari_bidang.toLowerCase().includes(filterText.toLowerCase()) ||
				item.ke_bidang.toLowerCase().includes(filterText.toLowerCase()) ||
				item.keterangan.toLowerCase().includes(filterText.toLowerCase())
			) {
				return true;
			}
		}
		return false;
	});

	// Columns DataTable
	const columnsDataTable = [
		{
			name: "No",
			selector: "no",
			sortable: true,
			width: "50px",
		},
		{
			name: "Tanggal",
			selector: "tanggal",
			sortable: true,
			wrap: true,
			maxWidth: "200px",
		},
		{
			name: "Dari Bidang",
			selector: "dari_bidang",
			sortable: true,
			maxWidth: "200px",
			wrap: true,
		},
		{
			name: "Ke Bidang",
			selector: "ke_bidang",
			sortable: true,
			wrap: true,
			maxWidth: "200px",
		},
		{
			name: "Keterangan",
			selector: "keterangan",
			sortable: true,
			wrap: true,
		},
		{
			maxWidth: "150px",
			name: "Action",
			sortable: true,
			cell: (row) => (
				<div data-tag="allowRowEvents">
					<Button
						color="info"
						className="btn btn-sm"
						// onClick={() => goToDetail(path, history, row.id_barang)}
					>
						<i className="fas fa-info"></i>
					</Button>
				</div>
			),
		},
	];

	// Sub Header Component
	const SubHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText("");
			}
		};

		return (
			<>
				<Button color="secondary">Semua Riwayat</Button>
				<Button color="success">Lihat Barang</Button>
				<FilterComponent
					onFilter={(e) => setFilterText(e.target.value)}
					onClear={handleClear}
					filterText={filterText}
				/>
			</>
		);
	}, [filterText, resetPaginationToggle]);

	return (
		<>
			<Row>
				<Col>
					<Card className="shadow">
						<CardHeader>
							<h2>Barang Pindah</h2>
						</CardHeader>
						<CardBody>
							<Row>
								<Col md="5">
									<FormGroup>
										<Label>Barang yang akan dipindahkan</Label>
										<div className="d-flex" style={{ columnGap: "10px" }}>
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

											<Button color="primary" style={{ width: "40%" }}>
												Pindah Barang
											</Button>
										</div>
									</FormGroup>
								</Col>
							</Row>
							<Row>
								<Col>
									<h1>Riwayat Barang Pindah</h1>
									<h2 className="text-muted">Laptop Acer</h2>
									<DataTable
										columns={columnsDataTable}
										data={filteredData}
										noHeader
										responsive={true}
										customStyles={customStyles}
										pagination
										paginationResetDefaultPage={resetPaginationToggle}
										subHeader
										subHeaderComponent={SubHeaderComponentMemo}
									/>
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

export default DataBarangPindah;
