// import barangPindah from "assets/dummyData/barangPindah";
import Loading from "components/Loading";
// import optionsBarang from "assets/dummyData/optionsBarang";
import { getAllBarang } from "context/actions/Barang";
import { getBarangPindah } from "context/actions/BarangPindah";
import { getAllBidang } from "context/actions/EPekerjaAPI/Bidang";
import { GlobalContext } from "context/Provider";
import customStyles from "datatableStyle/customStyles";
import { FilterComponent } from "datatableStyle/filterPencarian";
// import { format } from "date-fns";
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
import { goToRiwayat, goToDetailBarang, getCleanTanggal } from "../functions";
import ModalDetail from "../ModalDetail";
import ModalTambah from "../ModalTambah";
import ExpandableComponent from "../RiwayatBarangPindah/ExpandableComponent";

const DataBarangPindah = ({ path }) => {
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
  const [barangPindah, setBarangPindah] = useState([]);
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
    // Get Barang Pindah
    if (barang) {
      getBarangPindah(barang.value, setBarangPindah, setLoading);
    }
  }, [barang]);

  useEffect(() => {
    // Get All Bidang
    getAllBidang(setBidang);
  }, []);

  // Memperbaiki sebagian isi data dari api untuk ditampilkan di tabel Barang Pindah tujuannya untuk mengubah nilai dari_barang_detail dan ke_barang_detail menjadi String nama_bidang berdasarkan id_bidang
  const dataForDisplay = useMemo(() => {
    // Fungsi ini bertujuan untuk mengubah data berupa id menjadi string nama bidang
    const getNamaBidang = (id = 1) => {
      const search = bidang.filter((item) => {
        return item.id_bidang && item.id_bidang === id;
      });

      return search[0].nama_bidang;
    };

    const fixData = [];

    barangPindah.forEach((item) => {
      fixData.push({
        ...item,
        createdAt: getCleanTanggal(item.createdAt),
        dari_barang_detail: getNamaBidang(item.from_barang_detail.id_bidang),
        ke_barang_detail: getNamaBidang(item.to_barang_detail.id_bidang),
      });
    });

    return fixData;
  }, [barangPindah, bidang]);

  const filteredData = dataForDisplay.filter((item) => {
    if (item.createdAt && item.dari_barang_detail && item.ke_barang_detail) {
      if (
        item.createdAt.toLowerCase().includes(filterText.toLowerCase()) ||
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
      name: "Dari Bidang",
      selector: "dari_barang_detail",
      sortable: true,
      maxWidth: "200px",
      wrap: true,
    },
    {
      name: "Ke Bidang",
      selector: "ke_barang_detail",
      sortable: true,
      wrap: true,
      maxWidth: "200px",
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
              <h2>Barang Pindah</h2>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Barang yang akan dipindahkan</Label>
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
                        style={{ width: "40%" }}
                        onClick={() => setModal(!modal)}
                        disabled={!barang ? true : false}
                      >
                        Pindah Barang
                      </Button>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h1>Riwayat Barang Pindah</h1>
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
        modal={modal}
        setModal={setModal}
        barang={barang}
        setBarangPindah={setBarangPindah}
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

export default DataBarangPindah;
