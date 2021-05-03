import kendaraanPindah from "assets/dummyData/kendaraanPindah";
import customStyles from "datatableStyle/customStyles";
import { FilterComponent } from "datatableStyle/filterPencarian";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router";
import {
  Card,
  Col,
  Row,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
  ButtonGroup,
} from "reactstrap";
import { goBackToPrevPage, handleDelete } from "../functions";
import ModalDetail from "../ModalDetail";
import ModalEdit from "../ModalEdit";
import ExpandableComponent from "./ExpandableComponent";

const RiwayatKendaraanPindah = ({ path }) => {
  const history = useHistory();
  const [modalDetail, setModalDetail] = useState({
    id: null,
    modal: false,
  });
  const [modalEdit, setModalEdit] = useState({
    id: null,
    modal: false,
  });
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [filterText, setFilterText] = useState("");

  const filteredData = kendaraanPindah.filter((item) => {
    if (item.tanggal && item.merk && item.dari && item.ke) {
      if (
        item.tanggal.toLowerCase().includes(filterText.toLowerCase()) ||
        item.merk.toLowerCase().includes(filterText.toLowerCase()) ||
        item.dari.toLowerCase().includes(filterText.toLowerCase()) ||
        item.ke.toLowerCase().includes(filterText.toLowerCase())
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
      name: "Merk",
      selector: "merk",
      sortable: true,
      wrap: true,
    },
    {
      name: "Tipe",
      selector: "tipe",
      sortable: true,
      wrap: true,
    },
    {
      name: "Dari",
      selector: "dari",
      sortable: true,
      wrap: true,
    },
    {
      name: "Ke",
      selector: "ke",
      sortable: true,
      wrap: true
    },
    {
      maxWidth: "150px",
      name: "Action",
      cell: (row) => (
        <div data-tag="allowRowEvents">
          <ButtonGroup>
            <Button
              color="info"
              className="btn btn-sm"
              onClick={() =>
                setModalDetail({
                  ...modalDetail,
                  id: row.id_kendaraan_pindah,
                  modal: true,
                })
              }
            >
              <i className="fas fa-info"></i>
            </Button>
            <Button
              color="success"
              className="btn btn-sm"
              onClick={() =>
                setModalEdit({
                  ...modalEdit,
                  id: row.id_kendaraan_pindah,
                  modal: true,
                })
              }
            >
              <i className="fas fa-edit"></i>
            </Button>
            <Button
              color="danger"
              className="btn btn-sm"
              onClick={() => handleDelete(row.id_kendaraan_pindah)}
            >
              <i className="fas fa-trash"></i>
            </Button>
          </ButtonGroup>
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
              <h2>
                <i
                  onClick={() => goBackToPrevPage(history)}
                  style={{ cursor: "pointer" }}
                  className="fas fa-long-arrow-alt-left text-primary mr-3"
                ></i>{" "}
                Semua Riwayat Kendaraan Pindah
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
                subHeaderComponent={SubHeaderComponentMemo}
                expandableRows
                highlightOnHover
                expandOnRowClicked
                expandableRowsComponent={<ExpandableComponent />}
              />
            </CardBody>
            <CardFooter className="text-right"></CardFooter>
          </Card>
        </Col>
      </Row>

      {/* Modal Detail */}
      <ModalDetail modalDetail={modalDetail} setModalDetail={setModalDetail} />
      <ModalEdit modalEdit={modalEdit} setModalEdit={setModalEdit} />
    </>
  );
};

export default RiwayatKendaraanPindah;
