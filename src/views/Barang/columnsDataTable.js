import { ButtonGroup, Button } from "reactstrap";
import { goToDetail, goToEdit, handleDelete } from "./functions";

const columnsDataTable = [
	{
		name: "No",
		selector: "no",
		sortable: true,
		width: "50px",
	},
	{
		name: "No. Barang",
		selector: "no_barang",
		sortable: true,
		wrap: true,
		// maxWidth: "200px",
	},
	{
		name: "Nama Barang",
		selector: "nama",
		sortable: true,
		// maxWidth: "200px",
		wrap: true,
	},
	{
		name: "Merk",
		selector: "merk",
		sortable: true,
		wrap: true,
	},
	{
		name: "Ukuran",
		selector: "ukuran",
		sortable: true,
		wrap: true,
	},
	{
		// maxWidth: "150px",
		name: "Action",
		sortable: true,
		cell: (row) => (
			<div data-tag="allowRowEvents">
				<ButtonGroup>
					<Button
						color="info"
						className="btn btn-sm"
						onClick={() => goToDetail(row.id_barang)}
					>
						<i className="fas fa-info"></i>
					</Button>
					<Button
						color="success"
						className="btn btn-sm"
						onClick={() => goToEdit(row.id_barang)}
					>
						<i className="fas fa-edit"></i>
					</Button>
					<Button
						color="danger"
						className="btn btn-sm"
						onClick={() => handleDelete(row.id_barang)}
					>
					<i className="fas fa-trash"></i>
					</Button>
				</ButtonGroup>
			</div>
		),
	},
];

export default columnsDataTable;
