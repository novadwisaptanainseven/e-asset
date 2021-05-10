import React, { useState } from "react";
import barang from "assets/dummyData/barang";
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
import {
  goToDetail,
  goToEdit,
  goToTambah,
  showDeleteAlert,
} from "../functions";
import ExpandableComponent from "./ExpandableComponent";
import { useHistory } from "react-router";
import SubHeaderComponentMemo from "components/DataTable/SubHeaderComponentMemo";

const DataBarang = ({ path }) => {
  const history = useHistory();
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const filteredData = barang.filter((item) => {
    if (item.nama && item.no_barang && item.merk) {
      if (
        item.nama.toLowerCase().includes(filterText.toLowerCase()) ||
        item.no_barang.toLowerCase().includes(filterText.toLowerCase()) ||
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
              onClick={() => goToDetail(path, history, row.id_barang)}
            >
              <i className="fas fa-info"></i>
            </Button>
            <Button
              color="success"
              className="btn btn-sm"
              onClick={() => goToEdit(path, history, row.id_barang)}
            >
              <i className="fas fa-edit"></i>
            </Button>
            <Button
              color="danger"
              className="btn btn-sm"
              onClick={() => showDeleteAlert(row.id_barang)}
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
              <h3>Barang</h3>
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

export default DataBarang;
