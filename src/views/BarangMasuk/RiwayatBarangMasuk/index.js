import SubHeaderComponentMemo from "components/DataTable/SubHeaderComponentMemo";
import Loading from "components/Loading";
import { getAllBarangMasuk } from "context/actions/BarangMasuk";
import { getAllBidang } from "context/actions/EPekerjaAPI/Bidang";
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
import { getCleanTanggal, getNamaBidang, goBackToPrevPage } from "../functions";
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
  const [bidang, setBidang] = useState([]);
  const { barangMasukState, barangMasukDispatch } = useContext(GlobalContext);
  const { data: dataBarangMasuk, loading } = barangMasukState;

  useEffect(() => {
    // Get all riwayat barang masuk
    getAllBarangMasuk(barangMasukDispatch);
  }, [barangMasukDispatch]);

  useEffect(() => {
    getAllBidang(setBidang);
  }, []);

  // Memperbaiki sebagian isi data dari api untuk ditampilkan di tabel Barang Masuk, tujuannya untuk mengubah nilai field 'id_barang_detail' menjadi String 'nama_bidang' berdasarkan id_bidang
  const dataForDisplay = useMemo(() => {
    const fixData = [];

    if (dataBarangMasuk && bidang.length > 0) {
      dataBarangMasuk.data.forEach((item) => {
        fixData.push({
          ...item,
          createdAt: getCleanTanggal(item.createdAt),
          id_barang_detail: getNamaBidang(item.barang_detail.id_bidang, bidang),
        });
      });
    }

    return fixData;
  }, [dataBarangMasuk, bidang]);

  const filteredData = dataForDisplay.filter((item) => {
    if (
      item.createdAt.toLowerCase().includes(filterText.toLowerCase()) ||
      item.id_barang_detail.toLowerCase().includes(filterText.toLowerCase())
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
      selector: "createdAt",
      sortable: true,
      wrap: true,
      maxWidth: "200px",
    },
    {
      name: "Ke Bidang",
      selector: "id_barang_detail",
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
                idBarang: row.id_barang,
                id: row.id_barang_masuk,
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
                Semua Riwayat Barang Masuk
              </h2>
            </CardHeader>
            <CardBody>
              {loading ? (
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
        bidang={bidang}
        modalDetail={modalDetail}
        setModalDetail={setModalDetail}
      />
    </>
  );
};

export default RiwayatBarangMasuk;
