import React, { useContext, useEffect, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
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
  generateQrCode,
  goToDetail,
  goToEdit,
  goToTambah,
  handleGenerateQrCode,
  showDeleteAlert,
} from "../functions";
import ExpandableComponent from "./ExpandableComponent";
import { useHistory } from "react-router";
import SubHeaderComponentMemo from "components/DataTable/SubHeaderComponentMemo";
import { GlobalContext } from "context/Provider";
import { getAllKendaraan } from "context/actions/Kendaraan";
import Loading from "components/Loading";
import { ComponentToPrint } from "./ComponentToPrint";
import ReactExport from "react-data-export";
import { getDataSet } from "./dataSetExcel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const DataKendaraan = ({ path }) => {
  const componentPrintRef = useRef();
  const history = useHistory();
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const { kendaraanState, kendaraanDispatch } = useContext(GlobalContext);
  const { data: dataKendaraan } = kendaraanState;

  // Handle print data kendaraan
  const handlePrintKendaraan = useReactToPrint({
    content: () => componentPrintRef.current,
    pageStyle: `
      @media print {
        @page {
          size: landscape;
        }
      }
    `,
    copyStyles: true,
    documentTitle: "Data Kendaraan",
  });

  useEffect(() => {
    getAllKendaraan(kendaraanDispatch);
  }, [kendaraanDispatch]);

  const filteredData = !dataKendaraan
    ? []
    : dataKendaraan.filter((item) => {
        if (
          item.kode_kendaraan
            .toLowerCase()
            .includes(filterText.toLowerCase()) ||
          item.jenis_kendaraan
            .toLowerCase()
            .includes(filterText.toLowerCase()) ||
          item.merk.toLowerCase().includes(filterText.toLowerCase()) ||
          item.tipe.toLowerCase().includes(filterText.toLowerCase()) ||
          item.cc.toLowerCase().includes(filterText.toLowerCase()) ||
          item.warna.toLowerCase().includes(filterText.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });

  // Set Data for Export Excel
  const dataSetExcel = getDataSet(filteredData);

  // Columns DataTable
  const columnsDataTable = [
    {
      name: "Kode",
      selector: "kode_kendaraan",
      sortable: true,
      wrap: true,
      // maxWidth: "200px",
    },
    {
      name: "Jenis",
      selector: "jenis_kendaraan",
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
    {
      name: "QR Code",
      cell: (row) => (
        <div data-tag="allowRowEvents">
          {row.qr_code && (
            <Button
              color="secondary"
              className="btn btn-sm"
              onClick={() =>
                generateQrCode(path, history, row.id_kendaraan, row.qr_code)
              }
            >
              Lihat
            </Button>
          )}
          {!row.qr_code && (
            <Button
              color="dark"
              className="btn btn-sm"
              onClick={() =>
                handleGenerateQrCode(row.id_kendaraan, kendaraanDispatch)
              }
            >
              Generate
            </Button>
          )}
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
              {false ? (
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
                  {dataKendaraan ? (
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
                          handlePrint={handlePrintKendaraan}
                          // Export Excel
                          exportExcel={{
                            ExcelFile: ExcelFile,
                            ExcelSheet: ExcelSheet,
                            fileName: "Data Kendaraan",
                            dataSet: dataSetExcel,
                          }}
                        />
                      }
                      expandableRows
                      expandOnRowClicked
                      highlightOnHover
                      expandableRowsComponent={<ExpandableComponent />}
                    />
                  ) : (
                    <Loading />
                  )}
                </>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Component untuk print data kendaraan */}
      {true && (
        <div style={{ display: "none" }}>
          <ComponentToPrint ref={componentPrintRef} data={filteredData} />
        </div>
      )}
    </>
  );
};

export default DataKendaraan;
