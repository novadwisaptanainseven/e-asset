import Loading from "components/Loading";
import { getBarangById } from "context/actions/Barang";
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
import { goBackToPrevPage, goToRincianBarang } from "../functions";
import getFile from "context/actions/DownloadFile/getFile";
import getImage from "context/actions/DownloadFile/getImage";

const DetailBarang = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const { params } = match;
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(loading);

  const getFileName = (file) => {
    let file2 = file.split("/");
    let file3 = file2[file2.length - 1];

    return file3;
  };

  useEffect(() => {
    // Get barang by id
    getBarangById(params.id, setData, setLoading);
  }, [params]);

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
              {!data ? (
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
                            <th width={150}>Kode Barang</th>
                            <th width={40}>:</th>
                            <td>{data.kode_barang}</td>
                          </tr>
                          <tr>
                            <th>Nama Barang</th>
                            <th>:</th>
                            <td>{data.nama_barang}</td>
                          </tr>
                          <tr>
                            <th>Jenis Barang</th>
                            <th>:</th>
                            <td>
                              {data.jenis_barang === "tidak-tetap"
                                ? "Tidak Tetap"
                                : "Tetap"}
                            </td>
                          </tr>
                          <tr>
                            <th>Kategori</th>
                            <th>:</th>
                            <td>{data.nama_kategori}</td>
                          </tr>
                          <tr>
                            <th>Merk</th>
                            <th>:</th>
                            <td>{data.merk}</td>
                          </tr>
                          <tr>
                            <th>No. Pabrik</th>
                            <th>:</th>
                            <td>{data.no_pabrik}</td>
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
                            <th>Tahun Pembelian</th>
                            <th>:</th>
                            <td>{data.tahun_pembelian}</td>
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
                            <th>Jumlah Baik</th>
                            <th>:</th>
                            <td>{data.jumlah_baik}</td>
                          </tr>
                          <tr>
                            <th>Jumlah Rusak</th>
                            <th>:</th>
                            <td>{data.jumlah_rusak}</td>
                          </tr>
                          <tr>
                            <th>Jumlah Barang</th>
                            <th>:</th>
                            <td>{data.jumlah_barang}</td>
                          </tr>
                          <tr>
                            <th>Satuan</th>
                            <th>:</th>
                            <td>{data.satuan}</td>
                          </tr>
                          <tr>
                            <th>File</th>
                            <th>:</th>
                            <td>
                              {data.file && (
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
                          <tr>
                            <th valign="top">Keterangan</th>
                            <th valign="top">:</th>
                            <td>{data.keterangan}</td>
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
                            src={data.foto ? getImage(data.foto) : ""}
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
                        Pegawai - pegawai yang menggunakan barang
                      </h6>
                      <Table
                        className="align-items-center table-dark"
                        responsive
                      >
                        <thead className="thead-dark">
                          <tr>
                            <th scope="col">No</th>
                            <th scope="col">Pegawai</th>
                            <th scope="col">Total yg Digunakan</th>
                            <th scope="col">TMT Penggunaan Barang</th>
                            <th scope="col">Keterangan</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.pengguna.length > 0 ?
                            data.pengguna.map((item, index) => (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.pegawai.nama}</td>
                                <td>{item.jumlah}</td>
                                <td>{item.tmt_penggunaan}</td>
                                <td>{item.keterangan}</td>
                              </tr>
                            )) : (
                              <tr >
                                <td colspan="5" align="center">Barang ini belum ada pengguna</td>
                              </tr>
                            )}
                        </tbody>
                      </Table>
                      <Button
                        color="info"
                        className="mt-2"
                        onClick={() => {
                          goToRincianBarang(
                            "/easset/admin/rincian-barang",
                            history
                          );
                        }}
                      >
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
