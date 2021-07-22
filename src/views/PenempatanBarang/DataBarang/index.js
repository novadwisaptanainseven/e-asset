import Loading from "components/Loading";
import { getAllBarangTetap } from "context/actions/PenempatanBarang";
import { GlobalContext } from "context/Provider";
import customStyles from "datatableStyle/customStyles";
import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";
import { Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import { goToDaftar } from "../functions";
import ExpandableComponent from "./ExpandableComponent";
import SubHeaderComponentMemo from "./SubHeaderComponentMemo";

const DataBarang = ({ path }) => {
  const history = useHistory();
  const { barangRuanganState, barangRuanganDispatch } =
    useContext(GlobalContext);
  const { data: dataBarang } = barangRuanganState;
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  // Get all barang
  useEffect(() => {
    getAllBarangTetap(barangRuanganDispatch);
  }, [barangRuanganDispatch]);

  const filteredData = !dataBarang
    ? []
    : dataBarang.data.filter((item) => {
        if (
          item.nama_barang.toLowerCase().includes(filterText.toLowerCase()) ||
          item.kode_barang.toLowerCase().includes(filterText.toLowerCase()) ||
          item.merk.toLowerCase().includes(filterText.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });

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
      name: "Kode Barang",
      selector: "kode_barang",
      sortable: true,
      // maxWidth: "200px",
      wrap: true,
    },
    {
      name: "Nama Barang",
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
      // maxWidth: "150px",
      name: "Action",
      sortable: true,
      cell: (row) => (
        <div data-tag="allowRowEvents">
          <Button
            color="info"
            className="btn btn-sm"
            onClick={() => goToDaftar(path, history, row.id_barang)}
          >
            Tempatkan
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Row>
      <Col>
        <Card>
          <CardHeader className="shadow">
            <h2>Penempatan Barang</h2>
          </CardHeader>
          <CardBody>
            {dataBarang ? (
              <>
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
                  expandableRowsComponent={<ExpandableComponent />}
                />
              </>
            ) : (
              <Loading />
            )}
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default DataBarang;
