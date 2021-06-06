// import barangPindah from "assets/dummyData/barangPindah";
import SubHeaderComponentMemo from "components/DataTable/SubHeaderComponentMemo";
import Loading from "components/Loading";
import { getAllBarangPindah } from "context/actions/BarangPindah";
import { getAllBidang } from "context/actions/EPekerjaAPI/Bidang";
import { GlobalContext } from "context/Provider";
import customStyles from "datatableStyle/customStyles";
import React, { useContext, useEffect, useMemo, useState, useRef } from "react";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router";
import { useReactToPrint } from "react-to-print";
import {
  Card,
  Col,
  Row,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
} from "reactstrap";
// import DataBarangMasuk from "views/BarangMasuk/DataBarangMasuk";
import { getCleanTanggal, getNamaBidang, goBackToPrevPage } from "../functions";
import ModalDetail from "../ModalDetail";
import { ComponentToPrint } from "./ComponentToPrint";
import ExpandableComponent from "./ExpandableComponent";
import ReactExport from "react-data-export";
import { getDataSet } from "./dataSetExcel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const RiwayatBarangPindah = ({ path }) => {
  const componentPrintRef = useRef();
  const history = useHistory();
  const [modalDetail, setModalDetail] = useState({
    id: null,
    modal: false,
  });
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [bidang, setBidang] = useState([]);
  const { barangPindahState, barangPindahDispatch } = useContext(GlobalContext);
  const { data: dataBarangPindah, loading } = barangPindahState;

  // Handle print data barang
  const handlePrintBarangPindah = useReactToPrint({
    content: () => componentPrintRef.current,
    pageStyle: `
      @media print {
        @page {
          size: landscape;
        }
      }
    `,
    copyStyles: true,
    documentTitle: "Data Riwayat Barang Pindah",
  });

  // Get All Riwayat Barang Pindah
  useEffect(() => {
    getAllBarangPindah(barangPindahDispatch);
  }, [barangPindahDispatch]);

  // Get All Bidang
  useEffect(() => {
    getAllBidang(setBidang);
  }, []);

  // Memperbaiki sebagian isi data dari api untuk ditampilkan di tabel Barang Pindah tujuannya untuk mengubah nilai dari_barang_detail dan ke_barang_detail menjadi String nama_bidang berdasarkan id_bidang
  const dataForDisplay = useMemo(() => {
    const fixData = [];

    if (dataBarangPindah && bidang.length > 0) {
      dataBarangPindah.data.forEach((item) => {
        fixData.push({
          ...item,
          createdAt: getCleanTanggal(item.createdAt),
          dari_barang_detail: getNamaBidang(
            item.from_barang_detail.id_bidang,
            bidang
          ),
          ke_barang_detail: getNamaBidang(
            item.to_barang_detail.id_bidang,
            bidang
          ),
        });
      });
    }

    return fixData;
  }, [dataBarangPindah, bidang]);

  const filteredData = dataForDisplay.filter((item) => {
    if (item) {
      if (
        item.createdAt.toLowerCase().includes(filterText.toLowerCase()) ||
        item.barang.nama_barang
          .toLowerCase()
          .includes(filterText.toLowerCase()) ||
        item.barang.merk.toLowerCase().includes(filterText.toLowerCase()) ||
        item.dari_barang_detail
          .toLowerCase()
          .includes(filterText.toLowerCase()) ||
        item.ke_barang_detail
          .toLowerCase()
          .includes(filterText.toLowerCase()) ||
        item.keterangan.toLowerCase().includes(filterText.toLowerCase())
      ) {
        return true;
      }
    }
    return false;
  });

  // Set Data for Export Excel
  const dataSetExcel = getDataSet(filteredData);

  // Columns DataTable
  const columnsDataTable = [
    {
      name: "Tanggal",
      selector: "createdAt",
      sortable: true,
      wrap: true,
    },
    {
      name: "Barang",
      selector: "barang.nama_barang",
      sortable: true,
      wrap: true,
    },
    {
      name: "Merk",
      selector: "barang.merk",
      sortable: true,
      wrap: true,
    },
    {
      name: "Dari Bidang",
      selector: "dari_barang_detail",
      sortable: true,
      wrap: true,
    },
    {
      name: "Ke Bidang",
      selector: "ke_barang_detail",
      sortable: true,
      wrap: true,
    },
    {
      maxWidth: "150px",
      name: "Action",
      sortable: true,
      cell: (row) => (
        <div data-tag="allowRowEvents">
          <Button
            color="info"
            className="btn btn-sm"
            onClick={() =>
              setModalDetail({
                ...modalDetail,
                idBarang: row.id_barang,
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
                Semua Riwayat Barang Pindah
              </h2>
            </CardHeader>
            <CardBody>
              {loading || filteredData.length === 0 ? (
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
                      // Export PDF
                      handlePrint={handlePrintBarangPindah}
                      // Export Excel
                      exportExcel={{
                        ExcelFile: ExcelFile,
                        ExcelSheet: ExcelSheet,
                        fileName: "Data Riwayat Barang Pindah",
                        dataSet: dataSetExcel,
                      }}
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
        bidang={bidang}
        modalDetail={modalDetail}
        setModalDetail={setModalDetail}
      />

      {/* Component untuk print data barang pindah */}
      {bidang.length > 0 && filteredData.length > 0 && (
        <div style={{ display: "none" }}>
          <ComponentToPrint ref={componentPrintRef} data={filteredData} />
        </div>
      )}
    </>
  );
};

export default RiwayatBarangPindah;
