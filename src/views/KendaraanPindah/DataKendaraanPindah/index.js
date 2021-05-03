import kendaraanPindah from "assets/dummyData/kendaraanPindah";
import customStyles from "datatableStyle/customStyles";
import { FilterComponent } from "datatableStyle/filterPencarian";
import React, { useState } from "react";
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
import { handleDelete } from "views/Kendaraan/functions";
import { goToRiwayat, goToDetailKendaraan } from "../functions";
import ModalDetail from "../ModalDetail";
import ModalTambah from "../ModalTambah";
import ModalEdit from "../ModalEdit";
import ExpandableComponent from "../RiwayatKendaraanPindah/ExpandableComponent";

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
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [filterText, setFilterText] = useState("");

  const filteredData = kendaraanPindah.filter((item) => {
    if (item.tanggal && item.dari && item.ke && item.keterangan) {
      if (
        item.tanggal.toLowerCase().includes(filterText.toLowerCase()) ||
        item.dari.toLowerCase().includes(filterText.toLowerCase()) ||
        item.ke.toLowerCase().includes(filterText.toLowerCase()) ||
        item.keterangan.toLowerCase().includes(filterText.toLowerCase())
      ) {
        return true;
      }
    }
    return false;
  });

  // Dummy Data
  const options = [
    {
      value: "Avanza",
      label: "Avanza",
    },
    {
      value: "Kijang Inova",
      label: "Kijang Inova",
    },
    {
      value: "Mitsubisi",
      label: "Mitsubisi",
    },
  ];

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
              onClick={() => handleDelete(row.id_kendaraan_pindah)}
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
          onClick={() => goToDetailKendaraan(history, 1)}
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
                        onChange={(opt) => setKendaraan(opt ? opt.value : "")}
                        defaultInputValue={kendaraan}
                        isSearchable
                        isClearable
                        options={options}
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
                  <h2 className="text-muted">{kendaraan}</h2>
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
                </Col>
              </Row>
            </CardBody>
            <CardFooter className="text-right"></CardFooter>
          </Card>
        </Col>
      </Row>

      {/* Modal Tambah */}
      <ModalTambah modal={modal} setModal={setModal} kendaraan={kendaraan} />

      {/* Modal Detail */}
      <ModalDetail modalDetail={modalDetail} setModalDetail={setModalDetail} />

      {/* Modal Edit */}
      <ModalEdit modalEdit={modalEdit} setModalEdit={setModalEdit} />
    </>
  );
};

export default DataKendaraanPindah;
