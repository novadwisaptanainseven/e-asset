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
import { goBackToPrevPage, setInitStateEdit, getFileName } from "../functions";
import validationSchema from "./Formik/validationSchema";
import { getBarangById } from "context/actions/Barang";
import Loading from "components/Loading";
import { editBarang } from "context/actions/Barang/editBarang";
import { LoadAnimationWhite } from "assets";
import { getFile } from "context/actions/DownloadFile/getFile";

const EditBarang = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const { params } = match;
  const [selectedFile, setSelectedFile] = useState();
  const [selectedFile2, setSelectedFile2] = useState();
  const [preview, setPreview] = useState();
  const [preview2, setPreview2] = useState();
  const [data, setData] = useState("");
  const [hargaFormatRp, setHargaFormatRp] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

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

  useEffect(() => {
    // Get barang by ID
    getBarangById(params.id, setData, setLoading);
  }, [params]);

  // Menangani preview input gambar setelah dipilih
  const handleSelectedFile = useCallback(() => {
    if (!selectedFile) {
      setPreview(data ? getFile(data.foto) : null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [data, selectedFile]);

  // Menangani preview input file setelah dipilih
  const handleSelectedFile2 = useCallback(() => {
    if (!selectedFile2) {
      setPreview2(data ? getFileName(data.file) : null);
      return;
    }

    setPreview2("");
  }, [data, selectedFile2]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  const onSelectFile2 = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile2(undefined);
      return;
    }

    setSelectedFile2(e.target.files[0]);
  };

  useEffect(() => {
    handleSelectedFile();
  }, [handleSelectedFile]);

  useEffect(() => {
    handleSelectedFile2();
  }, [handleSelectedFile2]);

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
    if (values.file) {
      formData.append("file", values.file);
    }
    if (values.foto) {
      formData.append("foto", values.foto);
    }

    for (let pair of formData.entries()) {
      console.log(pair);
    }

    editBarang(params.id, formData, setLoadingSubmit, history);
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
            {loading ? (
              <Loading />
            ) : (
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
                                  errors.no_seri_pabrik &&
                                  touched.no_seri_pabrik
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
                                onChange={(e) => {
                                  onSelectFile2(e);
                                  setFieldValue("file", e.target.files[0]);
                                }}
                                className={`form-control ${
                                  errors.file && touched.file
                                    ? "is-invalid"
                                    : null
                                }`}
                              />
                              {data && data.file && (
                                <div className="mt-1">
                                  <a
                                    href={getFile(data.file)}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {preview2}
                                  </a>
                                </div>
                              )}
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
                        disabled={loadingSubmit ? true : false}
                      >
                        {loadingSubmit ? (
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
            )}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default EditBarang;
