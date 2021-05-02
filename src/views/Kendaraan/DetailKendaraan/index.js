import { FotoKendaraanSample, FotoPegawaiSample } from "assets";
import React, { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { Card, Col, Row, CardHeader, CardBody, CardFooter } from "reactstrap";
import { goBackToPrevPage } from "../functions";

const DetailKendaraan = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const { params } = match;

  useEffect(() => {
    console.log(params);
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
                    <table cellPadding={4} style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          <th width={150}>Nama Pegawai</th>
                          <th width={40}>:</th>
                          <td>123</td>
                        </tr>
                        <tr>
                          <th>Merk Kendaraan</th>
                          <th>:</th>
                          <td>Lorem</td>
                        </tr>
                        <tr>
                          <th>Tipe</th>
                          <th>:</th>
                          <td>Lorem</td>
                        </tr>
                        <tr>
                          <th>CC</th>
                          <th>:</th>
                          <td>Lorem</td>
                        </tr>
                        <tr>
                          <th>Warna</th>
                          <th>:</th>
                          <td>Merah</td>
                        </tr>
                        <tr>
                          <th>Rangka</th>
                          <th>:</th>
                          <td>Lorem</td>
                        </tr>
                        <tr>
                          <th>Mesin</th>
                          <th>:</th>
                          <td>Lorem</td>
                        </tr>
                        <tr>
                          <th>Pembuatan</th>
                          <th>:</th>
                          <td>Lorem</td>
                        </tr>
                        <tr>
                          <th>Pembelian</th>
                          <th>:</th>
                          <td>Lorem</td>
                        </tr>
                        <tr>
                          <th>No. Polisi</th>
                          <th>:</th>
                          <td>Lorem</td>
                        </tr>
                        <tr>
                          <th>BPKB</th>
                          <th>:</th>
                          <td>Lorem</td>
                        </tr>
                        <tr>
                          <th>STNK</th>
                          <th>:</th>
                          <td>Lorem</td>
                        </tr>
                        <tr>
                          <th>Biaya STNK</th>
                          <th>:</th>
                          <td>Lorem</td>
                        </tr>
                        <tr>
                          <th>Harga</th>
                          <th>:</th>
                          <td>Rp. 500.000</td>
                        </tr>
                        <tr>
                          <th>File</th>
                          <th>:</th>
                          <td>Lorem.pdf</td>
                        </tr>
                        <tr>
                          <th valign="top">Keterangan</th>
                          <th valign="top">:</th>
                          <td align="justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellat deserunt doloribus deleniti quibusdam
                            ullam unde natus dolorem ad doloremque? Pariatur,
                            reiciendis voluptatum quos harum illum nam voluptate
                            numquam corporis blanditiis.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Col>
                  <Col>
                    <Card className="mb-3">
                      <CardHeader>
                        <h3 className="mb-0">Foto Pegawai</h3>
                      </CardHeader>
                      <CardBody>
                        <img
                          src={FotoPegawaiSample}
                          alt="foto-pegawai"
                          width="100%"
                        />
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
    </>
  );
};

export default DetailKendaraan;
