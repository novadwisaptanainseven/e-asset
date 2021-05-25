// import barangMasuk from "assets/dummyData/barangMasuk";
// import optionsBarang from "assets/dummyData/optionsBarang";
import Loading from "components/Loading";
import { getAllBarang } from "context/actions/Barang";
import { getBarangMasuk } from "context/actions/BarangMasuk";
import { getAllBidang } from "context/actions/EPekerjaAPI/Bidang";
import { GlobalContext } from "context/Provider";
import customStyles from "datatableStyle/customStyles";
import { FilterComponent } from "datatableStyle/filterPencarian";
import React, { useContext, useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router";
import Select from "react-select";
import {
  Card,
  Col,
  Row,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
  FormGroup,
  Label,
} from "reactstrap";
import {
  goToRiwayat,
  goToDetailBarang,
  getCleanTanggal,
  getNamaBidang,
} from "../functions";
import ModalDetail from "../ModalDetail";
import ModalTambah from "../ModalTambah";
import ExpandableComponent from "../RiwayatBarangMasuk/ExpandableComponent";

const DataBarangMasuk = ({ path }) => {
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const [modalDetail, setModalDetail] = useState({
    id: null,
    modal: false,
  });
  const [barang, setBarang] = useState("");
  const [bidang, setBidang] = useState([]);
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [filterText, setFilterText] = useState("");
  const { barangState, barangDispatch } = useContext(GlobalContext);
  const { data: dataBarang } = barangState;
  const [barangMasuk, setBarangMasuk] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Get All Barang
    getAllBarang(barangDispatch);
  }, [barangDispatch]);

  const optionsBarang = useMemo(() => {
    let options = [];

    if (dataBarang) {
      dataBarang.data.forEach((item) => {
        options.push({
          value: item.id_barang,
          label: `${item.nama_barang} (${item.merk})`,
        });
      });
    }

    return options;
  }, [dataBarang]);

  useEffect(() => {
    // Get Barang Masuk
    if (barang) {
      getBarangMasuk(barang.value, setBarangMasuk, setLoading);
    }
  }, [barang]);

  useEffect(() => {
    // Get All Bidang
    getAllBidang(setBidang);
  }, []);

  // Memperbaiki sebagian isi data dari api untuk ditampilkan di tabel Barang Masuk, tujuannya untuk mengubah nilai field 'id_barang_detail' menjadi String 'nama_bidang' berdasarkan id_bidang
  const dataForDisplay = useMemo(() => {
    const fixData = [];

    barangMasuk.forEach((item) => {
      fixData.push({
        ...item,
        createdAt: getCleanTanggal(item.createdAt),
        id_barang_detail: getNamaBidang(item.barang_detail.id_bidang, bidang),
      });
    });

    console.log(fixData);

    return fixData;
  }, [barangMasuk, bidang]);

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
        <Button color="secondary" onClick={() => goToRiwayat(path, history)}>
          Semua Riwayat
        </Button>
        <Button
          color="success"
          disabled={!barang ? true : false}
          onClick={() => goToDetailBarang(history, barang.value)}
        >
          Lihat Barang
        </Button>
        <FilterComponent
          onFilter={(e) => setFilterText(e.target.value)}
          onClear={handleClear}
          filterText={filterText}
        />
      </>
    );
  }, [filterText, resetPaginationToggle, path, history, barang]);

  return (
    <>
      <Row>
        <Col>
          <Card className="shadow">
            <CardHeader>
              <h2>Barang Masuk</h2>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md="7">
                  <FormGroup>
                    <Label>Barang yang akan dimasukkan</Label>
                    <div className="d-flex" style={{ columnGap: "10px" }}>
                      <Select
                        styles={{
                          control: (provided, state) => ({
                            // none of react-select's styles are passed to <Control />
                            ...provided,
                            width: 300,
                          }),
                        }}
                        id="barang"
                        name="barang"
                        placeholder="-- Pilih Barang --"
                        onChange={(opt) => setBarang(opt ? opt : "")}
                        defaultInputValue={barang.value}
                        isSearchable
                        isClearable
                        options={optionsBarang}
                      />

                      <Button
                        color="primary"
                        style={{ width: "60%" }}
                        onClick={() => setModal(!modal)}
                        disabled={!barang ? true : false}
                      >
                        Tambah Barang Masuk
                      </Button>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h1>Riwayat Barang Masuk</h1>
                  <h2 className="text-muted">{barang.label}</h2>
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
                      subHeaderComponent={SubHeaderComponentMemo}
                      expandableRows
                      highlightOnHover
                      expandOnRowClicked
                      expandableRowsComponent={<ExpandableComponent />}
                    />
                  )}
                </Col>
              </Row>
            </CardBody>
            <CardFooter className="text-right"></CardFooter>
          </Card>
        </Col>
      </Row>

      {/* Modal Tambah */}
      <ModalTambah
        bidang={bidang}
        modal={modal}
        setModal={setModal}
        barang={barang}
        setBarangMasuk={setBarangMasuk}
        setLoading={setLoading}
      />

      {/* Modal Detail */}
      <ModalDetail
        bidang={bidang}
        barang={barang}
        modalDetail={modalDetail}
        setModalDetail={setModalDetail}
      />
    </>
  );
};

export default DataBarangMasuk;
