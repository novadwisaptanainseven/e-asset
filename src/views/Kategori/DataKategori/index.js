import kategori from "assets/dummyData/kategori";
import customStyles from "datatableStyle/customStyles";
import React from "react";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  Button,
  ButtonGroup,
} from "reactstrap";
import { goToEdit, goToTambah, showDeleteAlert } from "../functions";

const DataKategori = ({ path }) => {
  const history = useHistory();

  // Columns DataTable
  const columnsDataTable = [
    {
      name: "No",
      selector: "no",
      sortable: true,
      wrap: true,
      width: "60px",
    },
    {
      name: "Nama Kategori",
      selector: "nama_kategori",
      sortable: true,
      // maxWidth: "200px",
      wrap: true,
    },
    {
      name: "Ditambahkan Oleh",
      selector: "user_created",
      sortable: true,
      wrap: true,
    },
    {
      name: "Diedit Oleh",
      selector: "user_updated",
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
              color="success"
              className="btn btn-sm"
              onClick={() => goToEdit(path, history, row.id_kategori)}
            >
              <i className="fas fa-edit"></i>
            </Button>
            <Button
              color="danger"
              className="btn btn-sm"
              onClick={() => showDeleteAlert(row.id_kategori, null)}
            >
              <i className="fas fa-trash"></i>
            </Button>
          </ButtonGroup>
        </div>
      ),
    },
  ];

  return (
    <Row>
      <Col>
        <Card className="shadow">
          <CardHeader>
            <h2>Barang</h2>
          </CardHeader>
          <CardBody>
            <Button
              color="primary"
              className="btn btn-md mb-2"
              onClick={() => goToTambah(history, path)}
            >
              Tambah Data
            </Button>
            <DataTable
              columns={columnsDataTable}
              data={kategori}
              noHeader
              responsive={true}
              customStyles={customStyles}
              pagination
            />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default DataKategori;
