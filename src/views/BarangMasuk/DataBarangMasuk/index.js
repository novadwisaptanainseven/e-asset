import barangPindah from "assets/dummyData/barangPindah";
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
} from "reactstrap";
import { goToRiwayat, goToDetailBarang } from "../functions";
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
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [filterText, setFilterText] = useState("");

  const filteredData = barangPindah.filter((item) => {
    if (item.tanggal && item.dari_bidang && item.ke_bidang && item.keterangan) {
      if (
        item.tanggal.toLowerCase().includes(filterText.toLowerCase()) ||
        item.dari_bidang.toLowerCase().includes(filterText.toLowerCase()) ||
        item.ke_bidang.toLowerCase().includes(filterText.toLowerCase()) ||
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
      name: "Dari Bidang",
      selector: "dari_bidang",
      sortable: true,
      maxWidth: "200px",
      wrap: true,
    },
    {
      name: "Ke Bidang",
      selector: "ke_bidang",
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
          onClick={() => goToDetailBarang(history, 1)}
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
                        onChange={(opt) => setBarang(opt ? opt.value : "")}
                        defaultInputValue={barang}
                        isSearchable
                        isClearable
                        options={[
                          { value: "Komputer", label: "Komputer (Acer)" },
                          { value: "Laptop", label: "Laptop (Lenovo)" },
                          { value: "Printer", label: "Printer (Epson)" },
                        ]}
                      />

                      <Button
                        color="primary"
                        style={{ width: "60%" }}
                        onClick={() => setModal(!modal)}
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
                  <h2 className="text-muted">{barang}</h2>
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
      <ModalTambah modal={modal} setModal={setModal} barang={barang} />

      {/* Modal Detail */}
      <ModalDetail modalDetail={modalDetail} setModalDetail={setModalDetail} />
    </>
  );
};

export default DataBarangMasuk;
