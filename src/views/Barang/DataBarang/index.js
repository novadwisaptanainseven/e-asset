import React, { useContext, useEffect, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
// import barang from "assets/dummyData/barang";
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
  showDeleteAlert,
} from "../functions";
import ExpandableComponent from "./ExpandableComponent";
import { useHistory } from "react-router";
import SubHeaderComponentMemo from "./SubHeaderComponentMemo";
import { GlobalContext } from "context/Provider";
import { getAllBarang } from "context/actions/Barang";
// import { LoadAnimationBlue } from "assets";
import Loading from "components/Loading";
import { ComponentToPrint } from "./ComponentToPrint";
import { getDataSet } from "./dataSetExcel";
import ReactExport from "react-data-export";
import barang from "assets/dummyData/barang";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const DataBarang = ({ path }) => {
  const componentPrintRef = useRef();
  const history = useHistory();
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const { barangState, barangDispatch } = useContext(GlobalContext);
  const { data: dataBarang } = barangState;

  // Handle print data barang
  const handlePrintBarang = useReactToPrint({
    content: () => componentPrintRef.current,
    pageStyle: `
      @media print {
        @page {
          size: landscape;
        }
      }
    `,
    copyStyles: true,
    documentTitle: "Data Barang",
  });

  useEffect(() => {
    getAllBarang(barangDispatch);
  }, [barangDispatch]);

  const filteredData = barang.filter((item) => {
    if (item.nama_barang && item.kategori && item.kode_barang && item.merk) {
      if (
        item.nama_barang.toLowerCase().includes(filterText.toLowerCase()) ||
        item.kategori.toLowerCase().includes(filterText.toLowerCase()) ||
        item.kode_barang.toLowerCase().includes(filterText.toLowerCase()) ||
        item.merk.toLowerCase().includes(filterText.toLowerCase())
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
      name: "Jenis Barang",
      selector: "jenis_barang",
      sortable: true,
      wrap: true,
    },
    {
      name: "Kategori",
      selector: "kategori",
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
              onClick={() => showDeleteAlert(row.id_barang, barangDispatch)}
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
          <Button
            color="dark"
            className="btn btn-sm"
            onClick={() => generateQrCode(path, history, row.id_barang)}
          >
            Generate
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
              <h2>Barang</h2>
            </CardHeader>
            <CardBody>
              {dataBarang && dataBarang.data.length === 0 ? (
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
                        // Export PDF
                        handlePrint={handlePrintBarang}
                        // Export Excel
                        exportExcel={{
                          ExcelFile: ExcelFile,
                          ExcelSheet: ExcelSheet,
                          fileName: "Data Barang",
                          dataSet: dataSetExcel,
                        }}
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

      {/* Component untuk print data barang */}
      {dataBarang && (
        <div style={{ display: "none" }}>
          <ComponentToPrint ref={componentPrintRef} data={filteredData} />
        </div>
      )}
    </>
  );
};

export default DataBarang;
