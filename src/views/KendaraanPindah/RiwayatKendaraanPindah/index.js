import SubHeaderComponentMemo from "components/DataTable/SubHeaderComponentMemo";
import Loading from "components/Loading";
import { getAllPegawai } from "context/actions/EPekerjaAPI/Pegawai";
import { getAllKendaraanPindah } from "context/actions/KendaraanPindah";
import { GlobalContext } from "context/Provider";
import customStyles from "datatableStyle/customStyles";
import React, { useContext, useEffect, useMemo, useState } from "react";
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
import { getCleanTanggal } from "views/Kendaraan/functions";
import { getNamaPegawai, goBackToPrevPage} from "../functions";
import ModalDetail from "../ModalDetail";
import ExpandableComponent from "./ExpandableComponent";

const RiwayatKendaraanPindah = ({ path }) => {
  const history = useHistory();
  const [modalDetail, setModalDetail] = useState({
    id: null,
    modal: false,
  });
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [pegawai, setPegawai] = useState([]);
  const { kendaraanPindahState, kendaraanPindahDispatch } =
    useContext(GlobalContext);
  const { data: dataKendaraanPindah, loading } = kendaraanPindahState;

  // Get All Riwayat Kendaraan Pindah
  useEffect(() => {
    getAllKendaraanPindah(kendaraanPindahDispatch);
  }, [kendaraanPindahDispatch]);

  // Get All Pegawai
  useEffect(() => {
    getAllPegawai(setPegawai);
  }, []);

  // Memperbaiki sebagian isi data dari api untuk ditampilkan di tabel kendaraan pindah tujuannya untuk mengubah nilai field "dari" dan "ke" menjadi String nama pegawai berdasarkan id bidang
  const dataForDisplay = useMemo(() => {
    const fixData = [];

    if (dataKendaraanPindah && pegawai.length > 0) {
      dataKendaraanPindah.data.forEach((item) => {
        fixData.push({
          ...item,
          tanggal: getCleanTanggal(item.tanggal),
          dari: getNamaPegawai(item.dari, pegawai),
          ke: getNamaPegawai(item.ke, pegawai),
        });
      });
    }

    console.log(fixData);
    return fixData;
  }, [dataKendaraanPindah, pegawai]);

  const filteredData = dataForDisplay.filter((item) => {
    if (
      item.tanggal.toLowerCase().includes(filterText.toLowerCase()) ||
      item.dari.toLowerCase().includes(filterText.toLowerCase()) ||
      item.ke.toLowerCase().includes(filterText.toLowerCase()) ||
      item.kendaraan.merk.toLowerCase().includes(filterText.toLowerCase()) ||
      item.kendaraan.tipe.toLowerCase().includes(filterText.toLowerCase()) ||
      item.keterangan.toLowerCase().includes(filterText.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  });

  // Columns DataTable
  const columnsDataTable = [
    {
      name: "Tanggal",
      selector: "tanggal",
      sortable: true,
      wrap: true,
      maxWidth: "200px",
    },
    {
      name: "Merk",
      selector: "kendaraan.merk",
      sortable: true,
      wrap: true,
    },
    {
      name: "Tipe",
      selector: "kendaraan.tipe",
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
                id: row.id_kendaraan_pindah,
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
              {loading || !dataForDisplay.length > 0 ? (
                <Loading />
              ) : (
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
                  highlightOnHover
                  expandOnRowClicked
                  expandableRowsComponent={<ExpandableComponent />}
                />
              )}
            </CardBody>
            <CardFooter className="text-right"></CardFooter>
          </Card>
        </Col>
      </Row>

      {/* Modal Detail */}
      <ModalDetail
        modalDetail={modalDetail}
        setModalDetail={setModalDetail}
        pegawai={pegawai}
      />
    </>
  );
};

export default RiwayatKendaraanPindah;
