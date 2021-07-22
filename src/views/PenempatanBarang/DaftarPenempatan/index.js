import Loading from "components/Loading";
import { getBarangRuangan } from "context/actions/PenempatanBarang";
import customStyles from "datatableStyle/customStyles";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useHistory, useRouteMatch } from "react-router-dom";
import {
  Row,
  Col,
  CardBody,
  Card,
  CardHeader,
  Button,
  UncontrolledAlert,
} from "reactstrap";
import { goBackToPrevPage, showDeleteAlert } from "../functions";
import ExpandableComponent from "./ExpandableComponent";
import TambahBarangRuangan from "./TambahBarangRuangan";
import UpdateBarangRuangan from "./UpdateBarangRuangan";

const DaftarPenempatan = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const { params } = match;
  const [modalTambah, setModalTambah] = useState(false);
  const [modalUpdate, setModalUpdate] = useState({
    id: "",
    modal: false,
  });
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(loading);

  // Get Barang Ruangan by ID Barang
  useEffect(() => {
    getBarangRuangan(params.id, setData, setLoading);
  }, [params]);

  // Columns DataTable
  const columnsDataTable = [
    {
      name: "Ruangan",
      selector: "nama_ruangan",
      sortable: true,
      // maxWidth: "200px",
      wrap: true,
    },
    {
      name: "Jumlah",
      selector: "jumlah",
      sortable: true,
      wrap: true,
      width: "100px",
    },
    {
      name: "Tgl. Penempatan",
      selector: "tgl_penempatan",
      sortable: true,
      wrap: true,
      cell: (row) => (
        <div>{format(new Date(row.tgl_penempatan), "dd/MM/y")}</div>
      ),
    },
    {
      name: "Keterangan",
      selector: "keterangan",
      sortable: true,
      wrap: true,
    },
    {
      // maxWidth: "150px",
      name: "Action",
      sortable: true,
      cell: (row) => (
        <div data-tag="allowRowEvents">
          <Button
            color="success"
            className="btn btn-sm"
            onClick={() =>
              setModalUpdate({
                ...modalUpdate,
                id: row.id_barang_ruangan,
                modal: true,
              })
            }
          >
            Update
          </Button>
          <Button
            color="danger"
            className="btn btn-sm"
            onClick={() =>
              showDeleteAlert(
                params.id,
                row.id_barang_ruangan,
                setData,
                setLoading
              )
            }
          >
            Hapus
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Row>
      <Col>
        <Card>
          <CardHeader className="shadow">
            <h2>
              <i
                onClick={() => goBackToPrevPage(history)}
                style={{ cursor: "pointer" }}
                className="fas fa-long-arrow-alt-left text-primary mr-3"
              ></i>{" "}
              Daftar Barang Ruangan (
              {data && data.barang.nama_barang + " " + data.barang.merk})
            </h2>
          </CardHeader>
          <CardBody>
            <UncontrolledAlert
              color="warning"
              fade={true}
              className="text-left"
            >
              <span className="alert-inner--icon">
                <i className="ni ni-like-2" />
              </span>{" "}
              <span className="alert-inner--text">
                Setiap ruangan hanya mewakili satu barang. Sehingga apabila
                suatu barang sudah diletakkan di ruangan tertentu, maka barang
                yang sama tidak dapat dinputkan ke dalam ruangan yang sama. Jika
                ada barang masuk ke ruangan yg sama, maka tinggal klik tombol
                update
              </span>
            </UncontrolledAlert>
            <Card className="mb-3">
              <CardBody>
                <table>
                  <tr>
                    <th width={200}>Total Barang</th>
                    <th width={30}>:</th>
                    <td>{data.jumlah_barang}</td>
                  </tr>
                  <tr>
                    <th width={200}>Jumlah Barang Baik</th>
                    <th width={30}>:</th>
                    <td>{data && data.barang.jumlah_baik}</td>
                  </tr>
                  <tr>
                    <th width={200}>Jumlah Barang Rusak</th>
                    <th width={30}>:</th>
                    <td>{data.jumlah_rusak_tidak_terpakai}</td>
                  </tr>
                  <tr>
                    <th width={200}>Terpakai</th>
                    <th width={30}>:</th>
                    <td>{data.jumlah_baik_terpakai}</td>
                  </tr>
                  <tr>
                    <th>Tidak Terpakai</th>
                    <th>:</th>
                    <td>{data.jumlah_baik_tidak_terpakai}</td>
                  </tr>
                </table>
              </CardBody>
            </Card>

            <div className="d-flex justify-content-between">
              <Button
                color="primary"
                onClick={() => setModalTambah(!modalTambah)}
              >
                Tambah
              </Button>
              <div>
                <Button color="warning">PDF</Button>
                <Button color="success">Excel</Button>
              </div>
            </div>

            {data ? (
              <>
                <DataTable
                  columns={columnsDataTable}
                  data={data.barang_ruangan}
                  noHeader
                  responsive={true}
                  customStyles={customStyles}
                  pagination
                  expandableRows
                  expandOnRowClicked
                  highlightOnHover
                  expandableRowsComponent={<ExpandableComponent />}
                />
              </>
            ) : (
              <Loading />
            )}
          </CardBody>
        </Card>
      </Col>

      {/* Modal Tambah Barang Ruangan */}
      <TambahBarangRuangan
        modal={modalTambah}
        setModal={setModalTambah}
        data={data}
        setData={setData}
      />
      {/* Modal Update Barang Ruangan */}
      <UpdateBarangRuangan
        modal={modalUpdate}
        setModal={setModalUpdate}
        data={data}
        setData={setData}
      />
    </Row>
  );
};

export default DaftarPenempatan;
