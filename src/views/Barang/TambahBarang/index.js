import { LoadAnimationWhite } from "assets";
import { insertBarang } from "context/actions/Barang";
import { getAllBidang } from "context/actions/EPekerjaAPI/Bidang";
import { Formik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import {
  Card,
  Col,
  Row,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Input,
  Button,
  CardFooter,
  FormText,
} from "reactstrap";
import {
  goBackToPrevPage,
  handleHapusRincianBarang,
  handleTambahRincianBarang,
} from "../functions";
import initState from "./Formik/initState";
import validationSchema from "./Formik/validationSchema";
import RincianBarang from "./RincianBarang";

const TambahBarang = () => {
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [rincianBarang, setRincianBarang] = useState([]);
  const [inputVal, setInputVal] = useState({});
  const [hargaFormatRp, setHargaFormatRp] = useState("");
  const [bidang, setBidang] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Get All Bidang
    getAllBidang(setBidang);
  }, []);

  // Mengubah format harga dari number menjadi Currency Rupiah
  const convertToCurrency = (harga) => {
    let formatRp = parseInt(harga).toLocaleString("id", {
      style: "currency",
      currency: "IDR",
    });
    if (harga) {
      setHargaFormatRp(formatRp);
    } else {
      setHargaFormatRp("");
    }
  };

  // Handle conversion format harga onKeyUp
  const handleFormatRp = (value) => {
    convertToCurrency(value);
  };

  // Menangani preview input gambar setelah dipilih
  const handleSelectedFile = useCallback(() => {
    if (!selectedFile) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  useEffect(() => {
    handleSelectedFile();
  }, [handleSelectedFile]);

  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("no_barang", values.no_barang);
    formData.append("nama_barang", values.nama_barang);
    formData.append("tahun", values.tahun);
    formData.append("merk", values.merk);
    formData.append("no_seri_pabrik", values.no_seri_pabrik);
    formData.append("ukuran", values.ukuran);
    formData.append("bahan", values.bahan);
    formData.append("harga", values.harga);
    formData.append("keterangan", values.keterangan);
    formData.append("file", values.file);
    formData.append("foto", values.foto);

    rincianBarang.forEach((item, index) => {
      let idBidang = item.id_bidang.split("-");
      let idBidang2 = idBidang[0];

      formData.append(`id_bidang[${index}]`, idBidang2);
      formData.append(`jumlah_baik[${index}]`, item.jumlah_baik);
      formData.append(`jumlah_rusak[${index}]`, item.jumlah_rusak);
      formData.append(
        `jumlah_rusak_ringan[${index}]`,
        item.jumlah_rusak_ringan
      );
    });

    for (let item of formData.entries()) {
      console.log(item);
    }

    insertBarang(formData, setLoading, history);
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
                Tambah Barang
              </h2>
            </CardHeader>
            <Formik
              initialValues={initState}
              validationSchema={validationSchema}
              onSubmit={(values) => handleFormSubmit(values)}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <CardBody className="bg-secondary">
                    <div className="pl-lg-4">
                      <Row>
                        <Col>
                          <h6 className="heading-small text-muted mb-4">
                            Data Barang
                          </h6>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="no_barang"
                            >
                              No. Barang
                            </label>
                            <Input
                              type="text"
                              id="no_barang"
                              name="no_barang"
                              placeholder="No. Barang"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.no_barang || ""}
                              className={
                                errors.no_barang && touched.no_barang
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.no_barang && touched.no_barang && (
                              <div className="invalid-feedback">
                                {errors.no_barang}
                              </div>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="nama_barang"
                            >
                              Nama Barang
                            </label>
                            <Input
                              type="text"
                              id="nama_barang"
                              name="nama_barang"
                              placeholder="Nama Barang"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.nama_barang || ""}
                              className={
                                errors.nama_barang && touched.nama_barang
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.nama_barang && touched.nama_barang && (
                              <div className="invalid-feedback">
                                {errors.nama_barang}
                              </div>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="tahun"
                            >
                              Tahun
                            </label>
                            <Input
                              type="number"
                              id="tahun"
                              name="tahun"
                              placeholder="Tahun"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.tahun || ""}
                              className={
                                errors.tahun && touched.tahun
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.tahun && touched.tahun && (
                              <div className="invalid-feedback">
                                {errors.tahun}
                              </div>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="merk"
                            >
                              Merk
                            </label>
                            <Input
                              type="text"
                              id="merk"
                              name="merk"
                              placeholder="Merk"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.merk || ""}
                              className={
                                errors.merk && touched.merk
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.merk && touched.merk && (
                              <div className="invalid-feedback">
                                {errors.merk}
                              </div>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="no_seri_pabrik"
                            >
                              No. Seri Pabrik
                            </label>
                            <Input
                              type="text"
                              id="no_seri_pabrik"
                              name="no_seri_pabrik"
                              placeholder="No. Seri Pabrik"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.no_seri_pabrik || ""}
                              className={
                                errors.no_seri_pabrik && touched.no_seri_pabrik
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.no_seri_pabrik &&
                              touched.no_seri_pabrik && (
                                <div className="invalid-feedback">
                                  {errors.no_seri_pabrik}
                                </div>
                              )}
                          </FormGroup>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="ukuran"
                            >
                              Ukuran
                            </label>
                            <Input
                              type="text"
                              id="ukuran"
                              name="ukuran"
                              placeholder="Ukuran"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.ukuran || ""}
                              className={
                                errors.ukuran && touched.ukuran
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.ukuran && touched.ukuran && (
                              <div className="invalid-feedback">
                                {errors.ukuran}
                              </div>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="bahan"
                            >
                              Bahan
                            </label>
                            <Input
                              type="text"
                              id="bahan"
                              placeholder="Bahan"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.bahan || ""}
                              className={
                                errors.bahan && touched.bahan
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.bahan && touched.bahan && (
                              <div className="invalid-feedback">
                                {errors.bahan}
                              </div>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="harga"
                            >
                              Harga
                            </label>
                            <Input
                              type="number"
                              id="harga"
                              name="harga"
                              placeholder="Harga"
                              onChange={handleChange}
                              onKeyUp={(e) => handleFormatRp(e.target.value)}
                              onBlur={handleBlur}
                              value={values.harga || ""}
                              className={
                                errors.harga && touched.harga
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            <FormText>{hargaFormatRp}</FormText>
                            {errors.harga && touched.harga && (
                              <div className="invalid-feedback">
                                {errors.harga}
                              </div>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="keterangan"
                            >
                              Keterangan
                            </label>

                            <Input
                              type="textarea"
                              name="keterangan"
                              id="keterangan"
                              placeholder="Keterangan"
                              rows="7"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.keterangan || ""}
                              className={
                                errors.keterangan && touched.keterangan
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.keterangan && touched.keterangan && (
                              <div className="invalid-feedback">
                                {errors.keterangan}
                              </div>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="file"
                            >
                              File
                            </label>
                            <Input
                              type="file"
                              id="file"
                              name="file"
                              placeholder="File"
                              onBlur={handleBlur}
                              onChange={(e) =>
                                setFieldValue("file", e.target.files[0])
                              }
                              className={`form-control ${
                                errors.file && touched.file
                                  ? "is-invalid"
                                  : null
                              }`}
                            />
                            {errors.file && touched.file && (
                              <div className="invalid-feedback">
                                {errors.file}
                              </div>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="foto"
                            >
                              Foto
                            </label>
                            <Input
                              type="file"
                              id="foto"
                              name="foto"
                              placeholder="Foto"
                              onBlur={handleBlur}
                              onChange={(e) => {
                                onSelectFile(e);
                                setFieldValue("foto", e.target.files[0]);
                              }}
                              className={`form-control ${
                                errors.foto && touched.foto
                                  ? "is-invalid"
                                  : null
                              }`}
                            />
                            {errors.foto && touched.foto && (
                              <div className="invalid-feedback">
                                {errors.foto}
                              </div>
                            )}
                            {preview && (
                              <img
                                src={preview}
                                alt="img-preview"
                                className="img-thumbnail mt-2"
                                width={250}
                              />
                            )}
                          </FormGroup>
                        </Col>
                        <Col>
                          <h6 className="heading-small text-muted mb-4">
                            Bidang - bidang yang menggunakan barang
                          </h6>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="bahan"
                            >
                              Bidang
                            </label>
                            <Input
                              type="select"
                              name="id_bidang"
                              id="id_bidang"
                              onBlur={handleBlur}
                              onChange={(e) => {
                                setFieldValue("id_bidang", e.target.value);
                                setInputVal({
                                  ...inputVal,
                                  [e.target.name]: e.target.value,
                                });
                              }}
                              className={`form-control ${
                                errors.id_bidang && touched.id_bidang
                                  ? "is-invalid"
                                  : null
                              }`}
                            >
                              <option value="">-- Pilih Bidang --</option>
                              {bidang.map((item, index) => (
                                <option
                                  key={index}
                                  value={`${item.id_bidang}-${item.nama_bidang}`}
                                >
                                  {item.nama_bidang}
                                </option>
                              ))}
                              {/* <option value="1 - Perumahan">Perumahan</option> */}
                            </Input>
                            {errors.id_bidang && touched.id_bidang && (
                              <div className="invalid-feedback">
                                {errors.id_bidang}
                              </div>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="jumlah_baik"
                            >
                              Jumlah Baik
                            </label>
                            <Input
                              type="number"
                              id="jumlah_baik"
                              name="jumlah_baik"
                              placeholder="Jumlah Baik"
                              onChange={(e) => {
                                setFieldValue("jumlah_baik", e.target.value);
                                setInputVal({
                                  ...inputVal,
                                  [e.target.name]: e.target.value,
                                });
                              }}
                              className={`form-control ${
                                errors.jumlah_baik && touched.jumlah_baik
                                  ? "is-invalid"
                                  : null
                              }`}
                            />
                            {errors.jumlah_baik && touched.jumlah_baik && (
                              <div className="invalid-feedback">
                                {errors.jumlah_baik}
                              </div>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="jumlah_rusak"
                            >
                              Jumlah Rusak
                            </label>
                            <Input
                              type="number"
                              id="jumlah_rusak"
                              name="jumlah_rusak"
                              placeholder="Jumlah Rusak"
                              onBlur={handleBlur}
                              onChange={(e) => {
                                setFieldValue("jumlah_rusak", e.target.value);
                                setInputVal({
                                  ...inputVal,
                                  [e.target.name]: e.target.value,
                                });
                              }}
                              className={`form-control ${
                                errors.jumlah_rusak && touched.jumlah_rusak
                                  ? "is-invalid"
                                  : null
                              }`}
                            />
                            {errors.jumlah_rusak && touched.jumlah_rusak && (
                              <div className="invalid-feedback">
                                {errors.jumlah_rusak}
                              </div>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="jumlah_rusak_ringan"
                            >
                              Jumlah Rusak Ringan
                            </label>
                            <Input
                              type="number"
                              id="jumlah_rusak_ringan"
                              name="jumlah_rusak_ringan"
                              placeholder="Jumlah Rusak Ringan"
                              onBlur={handleBlur}
                              onChange={(e) => {
                                setFieldValue(
                                  "jumlah_rusak_ringan",
                                  e.target.value
                                );
                                setInputVal({
                                  ...inputVal,
                                  [e.target.name]: e.target.value,
                                });
                              }}
                              className={`form-control ${
                                errors.jumlah_rusak_ringan &&
                                touched.jumlah_rusak_ringan
                                  ? "is-invalid"
                                  : null
                              }`}
                            />
                            {errors.jumlah_rusak_ringan &&
                              touched.jumlah_rusak_ringan && (
                                <div className="invalid-feedback">
                                  {errors.jumlah_rusak_ringan}
                                </div>
                              )}
                          </FormGroup>
                          {/* Tabel Rincian Barang */}
                          <Button
                            type="button"
                            color="success"
                            style={{ fontSize: "1.2em" }}
                            disabled={
                              inputVal.id_bidang &&
                              inputVal.jumlah_baik &&
                              inputVal.jumlah_rusak &&
                              inputVal.jumlah_rusak_ringan
                                ? false
                                : true
                            }
                            onClick={() => {
                              handleTambahRincianBarang(
                                { ...inputVal },
                                setRincianBarang
                              );
                            }}
                          >
                            +
                          </Button>
                          <Button
                            type="button"
                            color="danger"
                            style={{ fontSize: "1.2em" }}
                            disabled={rincianBarang.length === 0 ? true : false}
                            onClick={() => {
                              handleHapusRincianBarang(
                                rincianBarang,
                                setRincianBarang
                              );
                            }}
                          >
                            -
                          </Button>
                          <RincianBarang data={rincianBarang} />
                          {/* End of tabel Rincian Barang */}
                        </Col>
                      </Row>
                    </div>
                  </CardBody>
                  <CardFooter className="text-right">
                    <Button
                      type="submit"
                      color="primary"
                      disabled={loading ? true : false}
                    >
                      {loading ? (
                        <img
                          width={30}
                          src={LoadAnimationWhite}
                          alt="load-animation"
                        />
                      ) : (
                        "Simpan"
                      )}
                    </Button>
                  </CardFooter>
                </Form>
              )}
            </Formik>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default TambahBarang;
