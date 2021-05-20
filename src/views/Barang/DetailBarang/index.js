// import { FotoBarangSample } from "assets";
import Loading from "components/Loading";
import { getBarangById } from "context/actions/Barang";
import { getFile } from "context/actions/DownloadFile/getFile";
import { getAllBidang } from "context/actions/EPekerjaAPI/Bidang";
import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import {
  Card,
  Col,
  Row,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
  Table,
} from "reactstrap";
import { goBackToPrevPage } from "../functions";

const DetailBarang = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const { params } = match;
  const [data, setData] = useState("");
  const [bidang, setBidang] = useState([]);
  const [loading, setLoading] = useState(false);

  const getFileName = (file) => {
    let file2 = file.split("\\");
    let file3 = file2[file2.length - 1];

    return file3;
  };

  useEffect(() => {
    // Get barang by id
    getBarangById(params.id, setData, setLoading);
    // Get all bidang from E-Pekerja
    getAllBidang(setBidang);
  }, [params]);

  const getNamaBidang = (id) => {
    const search = bidang.filter((item) => {
      return item.id_bidang && item.id_bidang === id;
    });

    const getValue = search[0];

    return getValue.nama_bidang;
  };

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
                Detail Barang
              </h2>
            </CardHeader>
            <CardBody className="bg-secondary">
              {loading ? (
                <Loading />
              ) : (
                <div
                //  className="pl-lg-4"
                >
                  <Row className="mb-4">
                    <Col md="6">
                      <h6 className="heading-small text-muted mb-2">
                        Deskripsi Barang
                      </h6>
                      <hr className="my-3" />
                      <table cellPadding={4} style={{ width: "100%" }}>
                        <tbody>
                          <tr>
                            <th width={150}>No. Barang</th>
                            <th width={40}>:</th>
                            <td>{data.no_barang}</td>
                          </tr>
                          <tr>
                            <th>Nama Barang</th>
                            <th>:</th>
                            <td>{data.nama_barang}</td>
                          </tr>
                          <tr>
                            <th>Merk</th>
                            <th>:</th>
                            <td>{data.nama_barang}</td>
                          </tr>
                          <tr>
                            <th>No. Seri Pabrik</th>
                            <th>:</th>
                            <td>{data.no_seri_pabrik}</td>
                          </tr>
                          <tr>
                            <th>Ukuran</th>
                            <th>:</th>
                            <td>{data.ukuran}</td>
                          </tr>
                          <tr>
                            <th>Bahan</th>
                            <th>:</th>
                            <td>{data.bahan}</td>
                          </tr>
                          <tr>
                            <th>Tahun</th>
                            <th>:</th>
                            <td>{data.tahun}</td>
                          </tr>
                          <tr>
                            <th>Harga</th>
                            <th>:</th>
                            <td>
                              {data &&
                                data.harga.toLocaleString("id", {
                                  style: "currency",
                                  currency: "IDR",
                                })}
                            </td>
                          </tr>
                          <tr>
                            <th>Keterangan</th>
                            <th>:</th>
                            <td>{data.keterangan}</td>
                          </tr>
                          <tr>
                            <th>File</th>
                            <th>:</th>
                            <td>
                              {data && data.file && (
                                <a
                                  href={getFile(data.file)}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {getFileName(data.file)}
                                </a>
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Col>
                    <Col md="6">
                      <Card>
                        <CardHeader>
                          <h3 className="mb-0">Foto Barang</h3>
                        </CardHeader>
                        <CardBody>
                          <img
                            src={data && data.foto && getFile(data.foto)}
                            alt="foto-barang"
                            width="100%"
                          />
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h6 className="heading-small text-muted mb-2">
                        Bidang - bidang yang menggunakan barang
                      </h6>
                      <Table
                        className="align-items-center table-dark"
                        responsive
                      >
                        <thead className="thead-dark">
                          <tr>
                            <th scope="col">No</th>
                            <th scope="col">Bidang</th>
                            <th scope="col">Jumlah Baik</th>
                            <th scope="col">Jumlah Rusak</th>
                            <th scope="col">Jumlah Rusak Ringan</th>
                            <th scope="col">Jumlah Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data &&
                          bidang.length > 0 &&
                          data.barang_detail.length > 0 ? (
                            data.barang_detail.map((item, index) => (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{getNamaBidang(item.id_bidang)}</td>
                                <td>{item.jumlah_baik}</td>
                                <td>{item.jumlah_rusak}</td>
                                <td>{item.jumlah_rusak_ringan}</td>
                                <td>{item.jumlah_total}</td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="6" className="text-center">
                                Data Masih Kosong
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </Table>
                      <Button color="info" className="mt-2">
                        Edit
                      </Button>
                    </Col>
                  </Row>
                </div>
              )}
            </CardBody>
            <CardFooter className="text-right"></CardFooter>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DetailBarang;
