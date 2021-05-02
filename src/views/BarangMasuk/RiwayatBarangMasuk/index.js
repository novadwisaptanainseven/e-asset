import barangPindah from "assets/dummyData/barangPindah";
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
} from "reactstrap";
import { goBackToPrevPage } from "../functions";
import ModalDetail from "../ModalDetail";
import ExpandableComponent from "./ExpandableComponent";

const RiwayatBarangMasuk = ({ path }) => {
  const history = useHistory();
  const [modalDetail, setModalDetail] = useState({
    id: null,
    modal: false,
  });
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [filterText, setFilterText] = useState("");

  const filteredData = barangPindah.filter((item) => {
    if (
      item.tanggal &&
      item.barang &&
      item.merk &&
      item.dari_bidang &&
      item.ke_bidang &&
      item.keterangan
    ) {
      if (
        item.tanggal.toLowerCase().includes(filterText.toLowerCase()) ||
        item.barang.toLowerCase().includes(filterText.toLowerCase()) ||
        item.merk.toLowerCase().includes(filterText.toLowerCase()) ||
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
      name: "Ke Bidang",
      selector: "ke_bidang",
      sortable: true,
      wrap: true,
    },
    {
      name: "Jml. Baik",
      selector: "jumlah_baik",
      sortable: true,
      wrap: true,
    },
    {
      name: "Jml. Rusak",
      selector: "jumlah_rusak",
      sortable: true,
      wrap: true,
    },
    {
      name: "Jml. Rusak Ringan",
      selector: "jumlah_rusak_ringan",
      sortable: true,
      wrap: true,
    },
    {
      maxWidth: "150px",
      name: "Action",
      cell: (row) => (
        <div data-tag="allowRowEvents">
          <Button
            color="info"
            className="btn btn-sm"
            onClick={() =>
              setModalDetail({
                ...modalDetail,
                id: row.id_barang_pindah,
                modal: true,
              })
            }
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
                Semua Riwayat Barang Masuk
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
    </>
  );
};

export default RiwayatBarangMasuk;
