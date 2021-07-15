import { LoadAnimationWhite } from "assets";
import { insertBarang } from "context/actions/Barang";
import getSelectKategori from "context/actions/Barang/getSelectKategori";
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
import { goBackToPrevPage } from "../functions";
import initState from "./Formik/initState";
import validationSchema from "./Formik/validationSchema";

const TambahBarang = () => {
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [hargaFormatRp, setHargaFormatRp] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectKategori, setSelectKategori] = useState([]);
  const [inputJumlah, setInputJumlah] = useState({
    jumlah_baik: 0,
    jumlah_rusak: 0,
  });

  // Get select kategori
  useEffect(() => {
    getSelectKategori(setSelectKategori);
  }, []);

  // Mengubah format harga dari number menjadi Currency Rupiah
  const convertToCurrency = (harga) => {
    let formatRp = parseInt(harga).toLocaleString("id", {
      style: "currency",
      currency: "IDR",
    });
    if (harga) {
      if (formatRp !== "RpNaN") setHargaFormatRp(formatRp);
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
    console.log("submit");

    const formData = new FormData();
    formData.append("kode_barang", values.kode_barang);
    formData.append("nama_barang", values.nama_barang);
    formData.append("jenis_barang", values.jenis_barang);
    formData.append("id_kategori", values.kategori);
    formData.append("tahun_pembelian", values.tahun_pembelian);
    formData.append("merk", values.merk);
    formData.append("no_pabrik", values.no_pabrik);
    formData.append("ukuran", values.ukuran);
    formData.append("bahan", values.bahan);
    formData.append("harga", values.harga);
    formData.append("jumlah_baik", values.jumlah_baik);
    formData.append("jumlah_rusak", values.jumlah_rusak);
    formData.append(
      "jumlah_barang",
      parseInt(inputJumlah.jumlah_baik) + parseInt(inputJumlah.jumlah_rusak)
    );
    formData.append("satuan", values.satuan);
    formData.append("keterangan", values.keterangan);
    if (values.file) {
      formData.append("file", values.file);
    }
    if (values.foto) {
      formData.append("foto", values.foto);
    }

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
                              htmlFor="kode_barang"
                            >
                              Kode Barang
                            </label>
                            <Input
                              type="text"
                              id="kode_barang"
                              name="kode_barang"
                              placeholder="Kode Barang"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.kode_barang || ""}
                              className={
                                errors.kode_barang && touched.kode_barang
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.kode_barang && touched.kode_barang && (
                              <div className="invalid-feedback">
                                {errors.kode_barang}
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
                              htmlFor="jenis_barang"
                            >
                              Jenis Barang
                            </label>
                            <Input
                              type="select"
                              id="jenis_barang"
                              name="jenis_barang"
                              placeholder="Jenis Barang"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.jenis_barang || ""}
                              className={
                                errors.jenis_barang && touched.jenis_barang
                                  ? "is-invalid"
                                  : null
                              }
                            >
                              <option value="">-- Pilih Jenis Barang --</option>
                              <option value="tetap">Tetap</option>
                              <option value="tidak-tetap">Tidak Tetap</option>
                            </Input>
                            {errors.jenis_barang && touched.jenis_barang && (
                              <div className="invalid-feedback">
                                {errors.jenis_barang}
                              </div>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="kategori"
                            >
                              Kategori
                            </label>
                            <Input
                              type="select"
                              id="kategori"
                              name="kategori"
                              placeholder="Kategori"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.kategori || ""}
                              className={
                                errors.kategori && touched.kategori
                                  ? "is-invalid"
                                  : null
                              }
                            >
                              <option value="">-- Pilih Kategori --</option>
                              {selectKategori.map((item, index) => (
                                <option key={index} value={item.id_kategori}>
                                  {item.nama_kategori}
                                </option>
                              ))}
                            </Input>
                            {errors.kategori && touched.kategori && (
                              <div className="invalid-feedback">
                                {errors.kategori}
                              </div>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="tahun_pembelian"
                            >
                              Tahun Pembelian
                            </label>
                            <Input
                              type="number"
                              id="tahun_pembelian"
                              name="tahun_pembelian"
                              placeholder="Tahun pembelian"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.tahun_pembelian || ""}
                              className={
                                errors.tahun_pembelian &&
                                touched.tahun_pembelian
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.tahun_pembelian &&
                              touched.tahun_pembelian && (
                                <div className="invalid-feedback">
                                  {errors.tahun_pembelian}
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
                              htmlFor="no_pabrik"
                            >
                              No. Pabrik
                            </label>
                            <Input
                              type="text"
                              id="no_pabrik"
                              name="no_pabrik"
                              placeholder="No. Pabrik"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.no_pabrik || ""}
                              className={
                                errors.no_pabrik && touched.no_pabrik
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.no_pabrik && touched.no_pabrik && (
                              <div className="invalid-feedback">
                                {errors.no_pabrik}
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
                              type="text"
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
                        </Col>
                        <Col>
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
                              min="0"
                              placeholder="Jumlah Baik"
                              onChange={(e) => {
                                handleChange(e);
                                setInputJumlah({
                                  ...inputJumlah,
                                  [e.target.name]: e.target.value,
                                });
                              }}
                              onBlur={handleBlur}
                              value={values.jumlah_baik || ""}
                              className={
                                errors.jumlah_baik && touched.jumlah_baik
                                  ? "is-invalid"
                                  : null
                              }
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
                              min="0"
                              placeholder="Jumlah Rusak"
                              onChange={(e) => {
                                handleChange(e);
                                setInputJumlah({
                                  ...inputJumlah,
                                  [e.target.name]: e.target.value,
                                });
                              }}
                              onBlur={handleBlur}
                              value={values.jumlah_rusak || ""}
                              className={
                                errors.jumlah_rusak && touched.jumlah_rusak
                                  ? "is-invalid"
                                  : null
                              }
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
                              htmlFor="jumlah_barang"
                            >
                              Jumlah Barang
                            </label>
                            <Input
                              readOnly
                              type="text"
                              id="jumlah_barang"
                              name="jumlah_barang"
                              placeholder="Jumlah Barang"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={
                                parseInt(inputJumlah.jumlah_baik) +
                                parseInt(inputJumlah.jumlah_rusak)
                              }
                              className={
                                errors.jumlah_barang && touched.jumlah_barang
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.jumlah_barang && touched.jumlah_barang && (
                              <div className="invalid-feedback">
                                {errors.jumlah_barang}
                              </div>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="satuan"
                            >
                              Satuan
                            </label>
                            <Input
                              type="select"
                              id="satuan"
                              name="satuan"
                              placeholder="Satuan"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.satuan || ""}
                              className={
                                errors.satuan && touched.satuan
                                  ? "is-invalid"
                                  : null
                              }
                            >
                              <option value="">-- Pilih Satuan --</option>
                              <option value="buah">Buah</option>
                              <option value="unit">Unit</option>
                              <option value="pack">Pack</option>
                            </Input>
                            {errors.satuan && touched.satuan && (
                              <div className="invalid-feedback">
                                {errors.satuan}
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
