import React, { useState } from "react";
import customStyles from "datatableStyle/customStyles";
import DataTable from "react-data-table-component";
import {
  Card,
  Col,
  Row,
  CardHeader,
  CardBody,
  Button,
  ButtonGroup,
} from "reactstrap";
// import columnsDataTable from "../columnsDataTable";
import { goToDetail, goToEdit, goToTambah, handleDelete } from "../functions";
import ExpandableComponent from "./ExpandableComponent";
import { useHistory } from "react-router";
import kendaraan from "assets/dummyData/kendaraan";
import SubHeaderComponentMemo from "components/DataTable/SubHeaderComponentMemo";

const DataKendaraan = ({ path }) => {
  const history = useHistory();
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const filteredData = kendaraan.filter((item) => {
    if (item.nama_pegawai && item.merk) {
      if (
        item.nama_pegawai.toLowerCase().includes(filterText.toLowerCase()) ||
        item.merk.toLowerCase().includes(filterText.toLowerCase())
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
      name: "Nama Pegawai",
      selector: "nama_pegawai",
      sortable: true,
      wrap: true,
      // maxWidth: "200px",
    },
    {
      name: "Merk",
      selector: "merk",
      sortable: true,
      // maxWidth: "200px",
      wrap: true,
    },
    {
      name: "Tipe",
      selector: "tipe",
      sortable: true,
      wrap: true,
    },
    {
      name: "CC",
      selector: "cc",
      sortable: true,
      wrap: true,
    },
    {
      name: "Warna",
      selector: "warna",
      sortable: true,
      wrap: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div data-tag="allowRowEvents">
          <ButtonGroup>
            <Button
              color="info"
              className="btn btn-sm"
              onClick={() => goToDetail(path, history, row.id_kendaraan)}
            >
              <i className="fas fa-info"></i>
            </Button>
            <Button
              color="success"
              className="btn btn-sm"
              onClick={() => goToEdit(path, history, row.id_kendaraan)}
            >
              <i className="fas fa-edit"></i>
            </Button>
            <Button
              color="danger"
              className="btn btn-sm"
              onClick={() => handleDelete(row.id_kendaraan)}
            >
              <i className="fas fa-trash"></i>
            </Button>
          </ButtonGroup>
        </div>
      ),
    },
  ];

  return (
    <>
      <Row>
        <Col>
          <Card className="shadow">
            <CardHeader>
              <h2>Kendaraan</h2>
            </CardHeader>
            <CardBody>
              <Button
                color="primary"
                className="btn btn-md"
                onClick={() => goToTambah(history, path)}
              >
                Tambah Data
              </Button>
              <DataTable
                columns={columnsDataTable}
                data={filteredData}
                noHeader
                responsive={true}
                customStyles={customStyles}
                pagination
                paginationResetDefaultPage={resetPaginationToggle}
                subHeader
                subHeaderComponent={
                  <SubHeaderComponentMemo
                    filterText={filterText}
                    setFilterText={setFilterText}
                    resetPaginationToggle={resetPaginationToggle}
                    setResetPaginationToggle={setResetPaginationToggle}
                    isPrintingButtonActive={true}
                  />
                }
                expandableRows
                expandOnRowClicked
                highlightOnHover
                expandableRowsComponent={<ExpandableComponent />}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DataKendaraan;
