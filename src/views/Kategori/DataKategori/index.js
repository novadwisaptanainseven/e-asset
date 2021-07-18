import Loading from "components/Loading";
import { getAllKategori } from "context/actions/Kategori";
import { GlobalContext } from "context/Provider";
import customStyles from "datatableStyle/customStyles";
import React, { useContext, useEffect } from "react";
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

  const { kategoriState, kategoriDispatch } = useContext(GlobalContext);
  const { data, loading } = kategoriState;

  // Get all kategori
  useEffect(() => {
    getAllKategori(kategoriDispatch);
  }, [kategoriDispatch]);

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
              onClick={() => showDeleteAlert(row.id_kategori, kategoriDispatch)}
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
            <h2>Kategori</h2>
          </CardHeader>
          <CardBody>
            <Button
              color="primary"
              className="btn btn-md mb-2"
              onClick={() => goToTambah(history, path)}
            >
              Tambah Data
            </Button>
            {data.length > 0 ? (
              <DataTable
                columns={columnsDataTable}
                data={data}
                noHeader
                responsive={true}
                customStyles={customStyles}
                pagination
              />
            ) : loading ? (
              <Loading />
            ) : (
              <DataTable
                columns={columnsDataTable}
                data={[]}
                noHeader
                responsive={true}
                customStyles={customStyles}
                pagination
              />
            )}
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default DataKategori;
