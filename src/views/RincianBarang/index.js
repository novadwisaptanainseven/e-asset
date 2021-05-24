import React, { useContext, useEffect, useMemo, useState } from "react";
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
  Table,
} from "reactstrap";
import { showDeleteAlert } from "./functions";
import ModalTambah from "./ModalTambah";
import Select from "react-select";
// import optionsBarang from "assets/dummyData/optionsBarang";
import { getRincianBarang } from "context/actions/RincianBarang";
import { GlobalContext } from "context/Provider";
import { getAllBarang } from "context/actions/Barang";
import Loading from "components/Loading";
import { getAllBidang } from "context/actions/EPekerjaAPI/Bidang";
import { CLEAN_UP } from "context/actionTypes";

const RincianBarang = () => {
  const [modal, setModal] = useState(false);
  const [barang, setBarang] = useState("");
  const [rincianBarang, setRincianBarang] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    barangState,
    barangDispatch,
    rincianBarangState,
    rincianBarangDispatch,
  } = useContext(GlobalContext);
  const { data } = barangState;
  const { idBarang, labelBarang } = rincianBarangState;
  const [bidang, setBidang] = useState([]);

  const getNamaBidang = (id = 1) => {
    const search = bidang.filter((item) => {
      return item.id_bidang && item.id_bidang === id;
    });

    const getValue = search[0];

    return getValue.nama_bidang;
  };

  useEffect(() => {
    // Get All Bidang
    getAllBidang(setBidang);
  }, []);

  useEffect(() => {
    if (!idBarang) {
      if (barang) {
        getRincianBarang(barang.value, setRincianBarang, setLoading);
      }
    } else {
      getRincianBarang(idBarang, setRincianBarang, setLoading);
    }
    return () => {
      rincianBarangDispatch({
        type: CLEAN_UP,
      });
    };
  }, [barang, idBarang, rincianBarangDispatch]);

  useEffect(() => {
    // Get All Barang
    getAllBarang(barangDispatch);
  }, [barangDispatch]);

  const optionsBarang = useMemo(() => {
    let options = [];

    if (data) {
      data.data.forEach((item) => {
        options.push({
          value: item.id_barang,
          label: `${item.nama_barang} (${item.merk})`,
        });
      });
    }

    return options;
  }, [data]);

  return (
    <>
      <Row>
        <Col>
          <Card className="shadow">
            <CardHeader>
              <h2>Rincian Barang</h2>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md="4">
                  <FormGroup>
                    <Label>Barang</Label>
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
                      defaultInputValue={labelBarang}
                      defaultValue={
                        idBarang
                          ? {
                              value: idBarang,
                              label: labelBarang,
                            }
                          : null
                      }
                      isSearchable
                      isClearable
                      options={optionsBarang}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="d-flex justify-content-between">
                    <Button
                      color="primary"
                      className="mb-3"
                      onClick={() => setModal(!modal)}
                      disabled={!barang ? true : false}
                    >
                      Tambah Rincian
                    </Button>
                    <div>
                      <Button color="warning">
                        Cetak Rincian Barang{" "}
                        {!idBarang ? barang.label : labelBarang}
                      </Button>
                    </div>
                  </div>

                  <h3>
                    Daftar Rincian Barang{" "}
                    {!idBarang ? barang.label : labelBarang}
                  </h3>
                  {loading ? (
                    <Loading />
                  ) : (
                    <Table className="align-items-center" responsive>
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">No</th>
                          <th scope="col">Bidang</th>
                          <th scope="col">Jumlah Baik</th>
                          <th scope="col">Jumlah Rusak</th>
                          <th scope="col">Jumlah Rusak Ringan</th>
                          <th scope="col">Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bidang.length > 0 &&
                          rincianBarang.map((item, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{getNamaBidang(item.id_bidang)}</td>
                              <td>{item.jumlah_baik}</td>
                              <td>{item.jumlah_rusak}</td>
                              <td>{item.jumlah_rusak_ringan}</td>
                              <td>
                                <Button
                                  color="danger"
                                  size="sm"
                                  onClick={() =>
                                    showDeleteAlert(
                                      barang,
                                      item.id_barang_detail,
                                      setRincianBarang,
                                      setLoading
                                    )
                                  }
                                >
                                  <i className="fas fa-trash"></i>
                                </Button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </Table>
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
        {...barang}
        setRincianBarang={setRincianBarang}
        setLoading={setLoading}
      />
    </>
  );
};

export default RincianBarang;
