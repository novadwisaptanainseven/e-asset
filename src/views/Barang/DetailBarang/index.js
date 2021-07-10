// import { FotoBarangSample } from "assets";
import Loading from "components/Loading";
import { getBarangById } from "context/actions/Barang";
import { getFile } from "context/actions/DownloadFile/getFile";
import { getAllBidang } from "context/actions/EPekerjaAPI/Bidang";
import React, { useContext, useEffect, useState } from "react";
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
import { GlobalContext } from "context/Provider";
import { FotoBarangSample } from "assets";

const DetailBarang = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const { params } = match;
  const [data, setData] = useState("");
  const [bidang, setBidang] = useState([]);
  const [loading, setLoading] = useState(false);
  const { rincianBarangDispatch } = useContext(GlobalContext);

  const getFileName = (file) => {
    let file2 = file.split("\\");
    let file3 = file2[file2.length - 1];

    return file3;
  };

  // useEffect(() => {
  //   // Get barang by id
  //   getBarangById(params.id, setData, setLoading);
  //   // Get all bidang from E-Pekerja
  //   getAllBidang(setBidang);
  // }, [params]);

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
              {false ? (
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
                            <td>123abc</td>
                          </tr>
                          <tr>
                            <th>Nama Barang</th>
                            <th>:</th>
                            <td>Komputer</td>
                          </tr>
                          <tr>
                            <th>Jenis Barang</th>
                            <th>:</th>
                            <td>Barang Tidak Tetap</td>
                          </tr>
                          <tr>
                            <th>Kategori</th>
                            <th>:</th>
                            <td>TIK</td>
                          </tr>
                          <tr>
                            <th>Merk</th>
                            <th>:</th>
                            <td>Lenovo</td>
                          </tr>
                          <tr>
                            <th>No. Pabrik</th>
                            <th>:</th>
                            <td>123123</td>
                          </tr>
                          <tr>
                            <th>Ukuran</th>
                            <th>:</th>
                            <td>123</td>
                          </tr>
                          <tr>
                            <th>Bahan</th>
                            <th>:</th>
                            <td>Polikarbonat</td>
                          </tr>
                          <tr>
                            <th>Tahun Pembelian</th>
                            <th>:</th>
                            <td>2021</td>
                          </tr>
                          <tr>
                            <th>Harga</th>
                            <th>:</th>
                            <td>Rp. 15.000.000</td>
                          </tr>
                          <tr>
                            <th>Jumlah Baik</th>
                            <th>:</th>
                            <td>30</td>
                          </tr>
                          <tr>
                            <th>Jumlah Rusak</th>
                            <th>:</th>
                            <td>0</td>
                          </tr>
                          <tr>
                            <th>Jumlah Barang</th>
                            <th>:</th>
                            <td>Rp. 15.000.000</td>
                          </tr>
                          <tr>
                            <th>Satuan</th>
                            <th>:</th>
                            <td>Unit</td>
                          </tr>
                          <tr>
                            <th valign="top">Keterangan</th>
                            <th valign="top">:</th>
                            <td>
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Accusantium voluptatibus dolor
                              dolorem quibusdam exercitationem officia quas
                              placeat officiis laborum architecto. Et ea
                              corporis laudantium ipsum porro sequi! Dolor,
                              consequuntur odit?
                            </td>
                          </tr>
                          <tr>
                            <th>File</th>
                            <th>:</th>
                            <td>
                              <a href=".">file-barang.pdf</a>
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
                            src={FotoBarangSample}
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
                          <tr>
                            <td>1</td>
                            <td>Nova Dwi Sapta Nain Seven</td>
                            <td>1</td>
                            <td>12/10/2021</td>
                            <td>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Cumque quod perspiciatis, aperiam inventore
                              illum odit. Accusantium a id perferendis libero
                              repudiandae ratione iste ipsum animi. Eligendi
                              eius facilis sit sint.
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Lyntom Irfan Darmawan</td>
                            <td>1</td>
                            <td>12/10/2021</td>
                            <td>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Cumque quod perspiciatis, aperiam inventore
                              illum odit. Accusantium a id perferendis libero
                              repudiandae ratione iste ipsum animi. Eligendi
                              eius facilis sit sint.
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Muhammad Fahrizal</td>
                            <td>1</td>
                            <td>12/10/2021</td>
                            <td>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Cumque quod perspiciatis, aperiam inventore
                              illum odit. Accusantium a id perferendis libero
                              repudiandae ratione iste ipsum animi. Eligendi
                              eius facilis sit sint.
                            </td>
                          </tr>
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
