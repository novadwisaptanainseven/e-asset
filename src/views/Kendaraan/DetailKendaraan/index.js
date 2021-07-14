// import { FotoPegawaiSample } from "assets";
import { ProfileImageBlank } from "assets";
import { FotoPegawaiSample } from "assets";
import { FotoKendaraanSample } from "assets";
import Loading from "components/Loading";
import getFile from "context/actions/DownloadFile/getFile";
import { getAllPegawai } from "context/actions/EPekerjaAPI/Pegawai";
import { getKendaraanById } from "context/actions/Kendaraan";
import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import {
  Card,
  Col,
  Row,
  CardHeader,
  CardBody,
  CardFooter,
  Badge,
  Button,
  Table,
} from "reactstrap";
import ModalPreviewImage from "../DataKendaraan/ModalPreviewImage";
import ModalPreviewImagePegawai from "../DataKendaraan/ModalPreviewImagePegawai";
import {
  getFileName,
  getImagePegawai,
  getNamaPegawai,
  goBackToPrevPage,
} from "../functions";

const DetailKendaraan = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const { params } = match;
  const [data, setData] = useState("");
  const [pegawai, setPegawai] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalPreview, setModalPreview] = useState(false);
  const [modalPreviewPegawai, setModalPreviewPegawai] = useState(false);

  // useEffect(() => {
  //   // Get Kendaraan By ID
  //   getKendaraanById(params.id, setData, setLoading);
  //   // Get All Pegawai
  //   getAllPegawai(setPegawai);
  // }, [params]);

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
                Detail Kendaraan
              </h2>
            </CardHeader>
            <CardBody className="bg-secondary">
              <div
              //  className="pl-lg-4"
              >
                <Row className="mb-4">
                  <Col md="8">
                    <h6 className="heading-small text-muted mb-2">
                      Deskripsi Kendaraan
                    </h6>
                    <hr className="my-3" />
                    {false ? (
                      <Loading />
                    ) : (
                      <table cellPadding={4} style={{ width: "100%" }}>
                        <tbody>
                          <tr>
                            <th>Pengguna Kendaraan</th>
                            <th>:</th>
                            <td>
                              <Badge color="danger" pill>
                                Pengguna belum ada.{" "}
                                <a
                                  className="text-dark link-pengguna-hover"
                                  href="."
                                >
                                  Atur Pengguna
                                </a>
                              </Badge>
                            </td>
                          </tr>
                          <tr>
                            <th>Kode Kendaraan</th>
                            <th>:</th>
                            <td>{data.kode_kendaraan}</td>
                          </tr>
                          <tr>
                            <th>Jenis Kendaraan</th>
                            <th>:</th>
                            <td>{data.jenis_kendaraan}</td>
                          </tr>
                          <tr>
                            <th>Merk Kendaraan</th>
                            <th>:</th>
                            <td>{data.merk}</td>
                          </tr>
                          <tr>
                            <th>Tipe</th>
                            <th>:</th>
                            <td>{data.tipe}</td>
                          </tr>
                          <tr>
                            <th>CC</th>
                            <th>:</th>
                            <td>{data.cc}</td>
                          </tr>
                          <tr>
                            <th>Bahan</th>
                            <th>:</th>
                            <td>{data.bahan}</td>
                          </tr>
                          <tr>
                            <th>Warna</th>
                            <th>:</th>
                            <td>{data.warna}</td>
                          </tr>
                          <tr>
                            <th>No. Polisi</th>
                            <th>:</th>
                            <td>{data.no_polisi}</td>
                          </tr>
                          <tr>
                            <th>No. Rangka</th>
                            <th>:</th>
                            <td>{data.no_rangka}</td>
                          </tr>
                          <tr>
                            <th>No. Mesin</th>
                            <th>:</th>
                            <td>{data.no_mesin}</td>
                          </tr>
                          <tr>
                            <th>No. Polisi</th>
                            <th>:</th>
                            <td>{data.merk}</td>
                          </tr>
                          <tr>
                            <th>Tahun Pembuatan</th>
                            <th>:</th>
                            <td>{data.tahun_pembuatan}</td>
                          </tr>
                          <tr>
                            <th>Tahun Pembelian</th>
                            <th>:</th>
                            <td>{data.tahun_pembelian}</td>
                          </tr>
                          <tr>
                            <th>BPKB</th>
                            <th>:</th>
                            <td>{data.bpkb}</td>
                          </tr>
                          <tr>
                            <th>STNK</th>
                            <th>:</th>
                            <td>{data.stnk}</td>
                          </tr>
                          <tr>
                            <th>Biaya STNK</th>
                            <th>:</th>
                            <td>
                              {data &&
                                data.biaya_stnk.toLocaleString("id", {
                                  style: "currency",
                                  currency: "IDR",
                                })}
                            </td>
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
                          <tr>
                            <th valign="top">Keterangan</th>
                            <th valign="top">:</th>
                            <td align="justify">{data.keterangan}</td>
                          </tr>
                        </tbody>
                      </table>
                    )}
                  </Col>
                  <Col>
                    <Card className="mb-3">
                      <CardHeader>
                        <h3 className="mb-0">Foto Pegawai</h3>
                      </CardHeader>
                      <CardBody>
                        <img
                          src={ProfileImageBlank}
                          alt="foto-pegawai"
                          width="100%"
                          style={{ cursor: "pointer" }}
                        />
                        {/* <img
                          src={
                            pegawai.length > 0
                              ? getImagePegawai(data.id_pegawai, pegawai)
                              : "."
                          }
                          alt="foto-pegawai"
                          width="100%"
                          style={{ cursor: "pointer" }}
                          onClick={() => setModalPreviewPegawai(true)}
                        /> */}
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader>
                        <h3 className="mb-0">Foto Kendaraan</h3>
                      </CardHeader>
                      <CardBody>
                        <img
                          src={FotoKendaraanSample}
                          alt="foto-kendaraan"
                          width="100%"
                          style={{ cursor: "pointer" }}
                          onClick={() => setModalPreview(true)}
                        />
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <h6 className="heading-small text-muted mb-2">
            Riwayat Pengguna Kendaraan
          </h6>
          <Table className="align-items-center table-dark" responsive>
            <thead className="thead-dark">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Foto</th>
                <th scope="col">Pegawai</th>
                <th scope="col">TMT Penggunaan Kendaraan</th>
                <th scope="col">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <img
                    src={FotoPegawaiSample}
                    width={100}
                    className="img-thumbnail"
                    alt="foto-pegawai"
                  />
                </td>
                <td>Nova Dwi Sapta Nain Seven</td>
                <td>12/10/2021</td>
                <td>Lorem ipsum dolor sit amet</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <img
                    src={FotoPegawaiSample}
                    width={100}
                    className="img-thumbnail"
                    alt="foto-pegawai"
                  />
                </td>
                <td>Lyntom Irfan Darmawan</td>
                <td>12/10/2021</td>
                <td>Lorem ipsum dolor sit amet consectetur</td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <img
                    src={FotoPegawaiSample}
                    width={100}
                    className="img-thumbnail"
                    alt="foto-pegawai"
                  />
                </td>
                <td>Muhammad Fahrizal</td>
                <td>12/10/2021</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </td>
              </tr>
            </tbody>
          </Table>
          <Button
            color="info"
            className="mt-2"
            // onClick={() => {
            //   goToRincianBarang("/easset/admin/rincian-barang", history);
            // }}
          >
            Edit Riwayat
          </Button>
        </Col>
      </Row>

      <ModalPreviewImage
        modal={modalPreview}
        setModal={setModalPreview}
        data={data.foto}
      />

      <ModalPreviewImagePegawai
        modal={modalPreviewPegawai}
        setModal={setModalPreviewPegawai}
        data={data}
        pegawai={pegawai}
      />
    </>
  );
};

export default DetailKendaraan;
