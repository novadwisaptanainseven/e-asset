// import { FotoPegawaiSample } from "assets";
import Loading from "components/Loading";
import { getFile } from "context/actions/DownloadFile/getFile";
import { getAllPegawai } from "context/actions/EPekerjaAPI/Pegawai";
import { getKendaraanById } from "context/actions/Kendaraan";
import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { Card, Col, Row, CardHeader, CardBody, CardFooter } from "reactstrap";
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

  useEffect(() => {
    // Get Kendaraan By ID
    getKendaraanById(params.id, setData, setLoading);
    // Get All Pegawai
    getAllPegawai(setPegawai);
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
                    {loading ? (
                      <Loading />
                    ) : (
                      <table cellPadding={4} style={{ width: "100%" }}>
                        <tbody>
                          <tr>
                            <th width={150}>Nama Pegawai</th>
                            <th width={40}>:</th>
                            <td>
                              {pegawai.length > 0 &&
                                getNamaPegawai(data.id_pegawai, pegawai)}
                            </td>
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
                            <th>Warna</th>
                            <th>:</th>
                            <td>{data.warna}</td>
                          </tr>
                          <tr>
                            <th>Rangka</th>
                            <th>:</th>
                            <td>{data.rangka}</td>
                          </tr>
                          <tr>
                            <th>Mesin</th>
                            <th>:</th>
                            <td>{data.mesin}</td>
                          </tr>
                          <tr>
                            <th>Pembuatan</th>
                            <th>:</th>
                            <td>{data.pembuatan}</td>
                          </tr>
                          <tr>
                            <th>Pembelian</th>
                            <th>:</th>
                            <td>{data.pembelian}</td>
                          </tr>
                          <tr>
                            <th>No. Polisi</th>
                            <th>:</th>
                            <td>{data.no_polisi}</td>
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
                          src={
                            pegawai.length > 0
                              ? getImagePegawai(data.id_pegawai, pegawai)
                              : "."
                          }
                          alt="foto-pegawai"
                          width="100%"
                          style={{ cursor: "pointer" }}
                          onClick={() => setModalPreviewPegawai(true)}
                        />
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader>
                        <h3 className="mb-0">Foto Kendaraan</h3>
                      </CardHeader>
                      <CardBody>
                        <img
                          src={data && data.file ? getFile(data.foto) : "."}
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
            <CardFooter className="text-right"></CardFooter>
          </Card>
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
