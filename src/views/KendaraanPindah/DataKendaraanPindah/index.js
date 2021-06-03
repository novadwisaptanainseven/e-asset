// import kendaraanPindah from "assets/dummyData/kendaraanPindah";
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
  ButtonGroup,
} from "reactstrap";
import {
  goToRiwayat,
  goToDetailKendaraan,
  showDeleteAlert,
} from "../functions";
import ModalDetail from "../ModalDetail";
import ModalTambah from "../ModalTambah";
import ModalEdit from "../ModalEdit";
import ExpandableComponent from "../RiwayatKendaraanPindah/ExpandableComponent";
// import optionsKendaraan from "assets/dummyData/optionsKendaraan";
import { GlobalContext } from "context/Provider";
import { getAllKendaraan } from "context/actions/Kendaraan";
import { getKendaraanPindah } from "context/actions/KendaraanPindah";
import { getCleanTanggal } from "views/Kendaraan/functions";
import { getNamaPegawai } from "views/Kendaraan/functions";
import { getAllPegawai } from "context/actions/EPekerjaAPI/Pegawai";
import Loading from "components/Loading";

const DataKendaraanPindah = ({ path }) => {
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState({
    id: null,
    modal: false,
  });
  const [modalDetail, setModalDetail] = useState({
    id: null,
    modal: false,
  });
  const [kendaraan, setKendaraan] = useState("");
  const [pegawai, setPegawai] = useState([]);
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [filterText, setFilterText] = useState("");
  const { kendaraanState, kendaraanDispatch } = useContext(GlobalContext);
  const { data: dataKendaraan } = kendaraanState;
  const [kendaraanPindah, setKendaraanPindah] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get All Kendaraan
  useEffect(() => {
    getAllKendaraan(kendaraanDispatch);
  }, [kendaraanDispatch]);

  // Get Kendaraan Pindah
  useEffect(() => {
    if (kendaraan) {
      getKendaraanPindah(kendaraan.value, setKendaraanPindah, setLoading);
    }
  }, [kendaraan]);

  // Get All Pegawai
  useEffect(() => {
    getAllPegawai(setPegawai);
  }, []);

  const optionsKendaraan = useMemo(() => {
    let options = [];

    if (dataKendaraan) {
      dataKendaraan.data.forEach((item) => {
        options.push({
          value: item.id_kendaraan,
          label: item.merk,
        });
      });
    }

    return options;
  }, [dataKendaraan]);

  // Memperbaiki sebagian isi data dari api untuk ditampilkan di tabel barang pindah tujuannya untuk mengubah nilai dari_pegawai dan ke_pegawai menjadi String nama pegawai berdasarkan id pegawai
  const dataForDisplay = useMemo(() => {
    const fixData = [];

    if (kendaraanPindah.length > 0 && pegawai.length > 0) {
      kendaraanPindah.forEach((item) => {
        fixData.push({
          ...item,
          createdAt: getCleanTanggal(item.createdAt),
          dari: getNamaPegawai(item.dari, pegawai),
          ke: getNamaPegawai(item.ke, pegawai),
        });
      });
    }

    return fixData;
  }, [kendaraanPindah, pegawai]);

  const filteredData = dataForDisplay.filter((item) => {
    if (
      item.createdAt.toLowerCase().includes(filterText.toLowerCase()) ||
      item.dari.toLowerCase().includes(filterText.toLowerCase()) ||
      item.ke.toLowerCase().includes(filterText.toLowerCase()) ||
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
      selector: "createdAt",
      sortable: true,
      wrap: true,
      maxWidth: "200px",
    },
    {
      name: "Dari",
      selector: "dari",
      sortable: true,
      maxWidth: "200px",
      wrap: true,
    },
    {
      name: "Ke",
      selector: "ke",
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
              onClick={() =>
                showDeleteAlert(
                  kendaraan.value,
                  row.id_kendaraan_pindah,
                  setKendaraanPindah,
                  setLoading
                )
              }
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
        <Button color="secondary" onClick={() => goToRiwayat(path, history)}>
          Semua Riwayat
        </Button>
        <Button
          color="success"
          disabled={!kendaraan ? true : false}
          onClick={() => goToDetailKendaraan(history, kendaraan.value)}
        >
          Lihat Kendaraan
        </Button>
        <FilterComponent
          onFilter={(e) => setFilterText(e.target.value)}
          onClear={handleClear}
          filterText={filterText}
        />
      </>
    );
  }, [filterText, resetPaginationToggle, path, history, kendaraan]);

  return (
    <>
      <Row>
        <Col>
          <Card className="shadow">
            <CardHeader>
              <h2>Kendaraan Pindah</h2>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md="7">
                  <FormGroup>
                    <Label>Kendaraan yang akan dipindahkan</Label>
                    <div className="d-flex" style={{ columnGap: "10px" }}>
                      <Select
                        styles={{
                          control: (provided, state) => ({
                            // none of react-select's styles are passed to <Control />
                            ...provided,
                            width: 350,
                          }),
                        }}
                        id="kendaraan"
                        name="kendaraan"
                        placeholder="-- Pilih Kendaraan --"
                        onChange={(opt) => setKendaraan(opt ? opt : "")}
                        defaultInputValue={
                          kendaraan.label ? kendaraan.label : ""
                        }
                        isSearchable
                        isClearable
                        options={optionsKendaraan}
                      />

                      <Button
                        color="primary"
                        style={{ width: "40%" }}
                        onClick={() => setModal(!modal)}
                        disabled={!kendaraan ? true : false}
                      >
                        Pindah Kendaraan
                      </Button>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h1>Riwayat Kendaraan Pindah</h1>
                  <h2 className="text-muted">{kendaraan.label}</h2>
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
        kendaraan={kendaraan}
        pegawai={pegawai}
        setKendaraanPindah={setKendaraanPindah}
      />

      {/* Modal Detail */}
      <ModalDetail
        modalDetail={modalDetail}
        setModalDetail={setModalDetail}
        pegawai={pegawai}
      />

      {/* Modal Edit */}
      <ModalEdit
        modalEdit={modalEdit}
        setModalEdit={setModalEdit}
        pegawai={pegawai}
        setKendaraanPindah={setKendaraanPindah}
      />
    </>
  );
};

export default DataKendaraanPindah;
