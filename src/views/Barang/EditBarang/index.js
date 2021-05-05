import React, { useCallback, useEffect, useState } from "react";
import { Formik } from "formik";
import { useHistory, useRouteMatch } from "react-router";
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
import { goBackToPrevPage, setInitStateEdit } from "../functions";
import validationSchema from "./Formik/validationSchema";

const EditBarang = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const { params } = match;
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [data, setData] = useState("");
  const [hargaFormatRp, setHargaFormatRp] = useState("");

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

  useEffect(() => {
    if (data) {
      convertToCurrency(data.harga);
    }
  }, [data]);

  // Simulasi Asynchronous untuk Get Data from api using setTimeout Function
  useEffect(() => {
    setTimeout(() => {
      setData({
        no_barang: "1",
        nama_barang: "Laptop",
        tahun: "2020",
        merk: "Asus",
        no_seri_pabrik: "123123",
        ukuran: "10x10",
        bahan: "lorem",
        harga: 20000,
        keterangan: "Lorem ipsum dolor sit amet",
        file: undefined,
        foto: undefined,
      });
      console.log("Set Data");
    }, 500);
  }, []);

  useEffect(() => {
    console.log(params);
  }, [params]);

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
    console.log(values);
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
                Edit Barang
              </h2>
            </CardHeader>
            <Formik
              initialValues={setInitStateEdit(data)}
              enableReinitialize={true}
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
                        <Col lg="6">
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
                        </Col>
                        <Col>
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
                              rows="5"
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
                    <Button type="submit" color="primary">
                      Simpan
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

export default EditBarang;
