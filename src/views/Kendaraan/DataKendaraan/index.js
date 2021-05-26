import React, { useContext, useEffect, useMemo, useState } from "react";
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
import {
  goToDetail,
  goToEdit,
  goToTambah,
  showDeleteAlert,
  getCleanTanggal,
  getNamaPegawai,
} from "../functions";
import ExpandableComponent from "./ExpandableComponent";
import { useHistory } from "react-router";
// import kendaraan from "assets/dummyData/kendaraan";
import SubHeaderComponentMemo from "components/DataTable/SubHeaderComponentMemo";
import { GlobalContext } from "context/Provider";
import { getAllKendaraan } from "context/actions/Kendaraan";
import { getAllPegawai } from "context/actions/EPekerjaAPI/Pegawai";
import Loading from "components/Loading";

const DataKendaraan = ({ path }) => {
  const history = useHistory();
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const { kendaraanState, kendaraanDispatch } = useContext(GlobalContext);
  const { data: dataKendaraan } = kendaraanState;
  const [pegawai, setPegawai] = useState([]);

  useEffect(() => {
    getAllKendaraan(kendaraanDispatch);
  }, [kendaraanDispatch]);

  useEffect(() => {
    // Get All Pegawai
    getAllPegawai(setPegawai);
  }, []);

  // Memperbaiki sebagian isi data dari api untuk ditampilkan di tabel Kendaraan, tujuannya untuk mengubah nilai field 'id_barang_detail' menjadi String 'nama_bidang' berdasarkan id_bidang
  const dataForDisplay = useMemo(() => {
    const fixData = [];

    if (dataKendaraan && pegawai.length > 0) {
      dataKendaraan.data.forEach((item) => {
        fixData.push({
          ...item,
          createdAt: getCleanTanggal(item.createdAt),
          nama_pegawai: getNamaPegawai(item.id_pegawai, pegawai),
        });
      });
    }

    console.log(fixData);

    return fixData;
  }, [dataKendaraan, pegawai]);

  const filteredData = dataForDisplay.filter((item) => {
    if (item.merk.toLowerCase().includes(filterText.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });

  // Columns DataTable
  const columnsDataTable = [
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
              onClick={() =>
                showDeleteAlert(row.id_kendaraan, kendaraanDispatch)
              }
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
              {!dataKendaraan ? (
                <Loading />
              ) : (
                <>
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
                </>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DataKendaraan;
