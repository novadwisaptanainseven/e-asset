
import Loading from "components/Loading";
import { getAllRuangan } from "context/actions/Ruangan";
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

const DataRuangan = ({ path }) => {
  const history = useHistory();

  const { ruanganState, ruanganDispatch } = useContext(GlobalContext);
  const { data, loading } = ruanganState;

  // Get all ruangan
  useEffect(() => {
    getAllRuangan(ruanganDispatch);
  }, [ruanganDispatch]);

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
      name: "Nama Ruangan",
      selector: "nama_ruangan",
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
              onClick={() => goToEdit(path, history, row.id_ruangan)}
            >
              <i className="fas fa-edit"></i>
            </Button>
            <Button
              color="danger"
              className="btn btn-sm"
              onClick={() => showDeleteAlert(row.id_ruangan, ruanganDispatch)}
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
            <h2>Ruangan</h2>
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

export default DataRuangan;
