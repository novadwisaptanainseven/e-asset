import riwayatPenempatanBarang from "assets/dummyData/riwayatPenempatanBarang";
import customStyles from "datatableStyle/customStyles";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "reactstrap";
import { goBackToPrevPage } from "../functions";
import ExpandableComponent from "./ExpandableComponent";
import SubHeaderComponentMemo from "./SubHeaderComponentMemo";

const RiwayatPenempatanBarang = () => {
  const history = useHistory();
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const filteredData = riwayatPenempatanBarang.filter((item) => {
    if (
      item.nama_ruangan.toLowerCase().includes(filterText.toLowerCase()) ||
      item.penginput.toLowerCase().includes(filterText.toLowerCase()) ||
      item.merk.toLowerCase().includes(filterText.toLowerCase()) ||
      item.aktivitas.toLowerCase().includes(filterText.toLowerCase()) ||
      item.nama_barang.toLowerCase().includes(filterText.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  });

  const columnsDataTable = [
    {
      name: "Penginput",
      selector: "penginput",
      wrap: true,
      sortable: true,
    },
    {
      name: "Aktivitas",
      selector: "aktivitas",
      wrap: true,
      sortable: true,
    },
    {
      name: "Ruangan",
      selector: "nama_ruangan",
      sortable: true,
      wrap: true,
    },
    {
      name: "Barang",
      selector: "nama_barang",
      sortable: true,
      wrap: true,
    },
    {
      name: "Merk",
      selector: "merk",
      sortable: true,
      wrap: true,
    },
    {
      name: "Jumlah",
      selector: "jumlah",
      wrap: true,
    },
    {
      name: "Aksi",
      selector: "aksi",
      cell: (row) => (
        <div data-tag="allowRowEvents">
          <Button
            color="danger"
            className="btn btn-sm"
            // onClick={() =>
            //   showDeleteAlert(row.id_kendaraan, kendaraanDispatch)
            // }
          >
            <i className="fas fa-trash"></i>
          </Button>
        </div>
      ),
    },
  ];

  return (
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
              Riwayat Penempatan Barang
            </h2>
          </CardHeader>
          <CardBody>
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
  );
};

export default RiwayatPenempatanBarang;
