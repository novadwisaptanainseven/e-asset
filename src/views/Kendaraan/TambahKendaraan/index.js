import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Select from "react-select";
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
import { goBackToPrevPage, setInitState, handleFormatRp } from "../functions";

import { Formik } from "formik";
import optionsPegawai from "assets/dummyData/optionsPegawai";
import validationSchema from "../Formik/validationSchema";

const TambahKendaraan = () => {
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [touchedSelect, setTouchedSelect] = useState(false);
  const [hargaFormatRp, setHargaFormatRp] = useState("");
  const [biayaStnkFormatRp, setBiayaStnkFormatRp] = useState("");

  const initState = setInitState("");

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
                Tambah Kendaraan
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
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="no_barang"
                            >
                              Pilih Pegawai
                            </label>
                            <Select
                              styles={{
                                control: (provided, state) => ({
                                  ...provided,
                                  border:
                                    errors.id_pegawai && touchedSelect
                                      ? "1px solid #fb6340"
                                      : null,
                                }),
                              }}
                              id="id_pegawai"
                              name="id_pegawai"
                              placeholder="-- Pilih Pegawai --"
                              onChange={(opt) => {
                                setTouchedSelect(false);
                                setFieldValue(
                                  "id_pegawai",
                                  opt ? opt.value : ""
                                );
                              }}
                              onFocus={() => setTouchedSelect(true)}
                              isSearchable
                              isClearable
                              options={optionsPegawai}
                            />
                            {!values.id_pegawai && touchedSelect && (
                              <div
                                className="mt-1"
                                style={{ fontSize: "0.8em", color: "#fb6340" }}
                              >
                                {errors.id_pegawai}
                              </div>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="merk"
                            >
                              Merk Kendaraan
                            </label>
                            <Input
                              type="text"
                              id="merk"
                              name="merk"
                              placeholder="Merk Kendaraan"
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
                              htmlFor="tipe"
                            >
                              Tipe
                            </label>
                            <Input
                              type="text"
                              id="tipe"
                              name="tipe"
                              placeholder="tipe"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.tipe || ""}
                              className={
                                errors.tipe && touched.tipe
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.tipe && touched.tipe && (
                              <div className="invalid-feedback">
                                {errors.tipe}
                              </div>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <label className="form-control-label" htmlFor="cc">
                              CC
                            </label>
                            <Input
                              type="text"
                              id="cc"
                              name="cc"
                              placeholder="CC"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.cc || ""}
                              className={
                                errors.cc && touched.cc ? "is-invalid" : null
                              }
                            />
                            {errors.cc && touched.cc && (
                              <div className="invalid-feedback">
                                {errors.cc}
                              </div>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="warna"
                            >
                              Warna
                            </label>
                            <Input
                              type="text"
                              id="warna"
                              name="warna"
                              placeholder="Warna"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.warna || ""}
                              className={
                                errors.warna && touched.warna
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.warna && touched.warna && (
                              <div className="invalid-feedback">
                                {errors.warna}
                              </div>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="rangka"
                            >
                              Rangka
                            </label>
                            <Input
                              type="text"
                              id="rangka"
                              name="rangka"
                              placeholder="Rangka"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.rangka || ""}
                              className={
                                errors.rangka && touched.rangka
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.rangka && touched.rangka && (
                              <div className="invalid-feedback">
                                {errors.rangka}
                              </div>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="mesin"
                            >
                              Mesin
                            </label>
                            <Input
                              type="text"
                              id="mesin"
                              name="mesin"
                              placeholder="Mesin"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.mesin || ""}
                              className={
                                errors.mesin && touched.mesin
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.mesin && touched.mesin && (
                              <div className="invalid-feedback">
                                {errors.mesin}
                              </div>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="pembuatan"
                            >
                              Pembuatan
                            </label>
                            <Input
                              type="text"
                              id="pembuatan"
                              name="pembuatan"
                              placeholder="Pembuatan"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.pembuatan || ""}
                              className={
                                errors.pembuatan && touched.pembuatan
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.pembuatan && touched.pembuatan && (
                              <div className="invalid-feedback">
                                {errors.pembuatan}
                              </div>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="pembelian"
                            >
                              Pembelian
                            </label>
                            <Input
                              type="text"
                              id="pembelian"
                              name="pembelian"
                              placeholder="Pembelian"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.pembelian || ""}
                              className={
                                errors.pembelian && touched.pembelian
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.pembelian && touched.pembelian && (
                              <div className="invalid-feedback">
                                {errors.pembelian}
                              </div>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="no_polisi"
                            >
                              No. Polisi
                            </label>
                            <Input
                              type="text"
                              id="no_polisi"
                              name="no_polisi"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.no_polisi || ""}
                              className={
                                errors.no_polisi && touched.no_polisi
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.no_polisi && touched.no_polisi && (
                              <div className="invalid-feedback">
                                {errors.no_polisi}
                              </div>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="bpkb"
                            >
                              BPKB
                            </label>
                            <Input
                              type="text"
                              id="bpkb"
                              name="bpkb"
                              placeholder="BPKB"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.bpkb || ""}
                              className={
                                errors.bpkb && touched.bpkb
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.bpkb && touched.bpkb && (
                              <div className="invalid-feedback">
                                {errors.bpkb}
                              </div>
                            )}
                          </FormGroup>
                        </Col>

                        <Col>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="stnk"
                            >
                              STNK
                            </label>
                            <Input
                              type="text"
                              id="stnk"
                              name="stnk"
                              placeholder="STNK"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.stnk || ""}
                              className={
                                errors.stnk && touched.stnk
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.stnk && touched.stnk && (
                              <div className="invalid-feedback">
                                {errors.stnk}
                              </div>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="biaya_stnk"
                            >
                              Biaya STNK
                            </label>
                            <Input
                              type="number"
                              id="biaya_stnk"
                              name="biaya_stnk"
                              placeholder="Biaya STNK"
                              onChange={handleChange}
                              onKeyUp={(e) =>
                                handleFormatRp(
                                  e.target.value,
                                  setBiayaStnkFormatRp
                                )
                              }
                              onBlur={handleBlur}
                              value={values.biaya_stnk || ""}
                              className={
                                errors.biaya_stnk && touched.biaya_stnk
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            <FormText>{biayaStnkFormatRp}</FormText>
                            {errors.biaya_stnk && touched.biaya_stnk && (
                              <div className="invalid-feedback">
                                {errors.biaya_stnk}
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
                              onBlur={handleBlur}
                              onKeyUp={(e) =>
                                handleFormatRp(e.target.value, setHargaFormatRp)
                              }
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
                              type="text"
                              id="keterangan"
                              name="keterangan"
                              placeholder="Keterangan"
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
                              placeholder="File"
                              onChange={(e) => {
                                setFieldValue("file", e.target.files[0]);
                              }}
                              onBlur={handleBlur}
                              className={`form-control ${
                                errors.file && touched.file
                                  ? "is-invalid"
                                  : null
                              }
                              `}
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
                              }
                              `}
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
                      onClick={() => {
                        !values.id_pegawai
                          ? setTouchedSelect(true)
                          : setTouchedSelect(false);
                      }}
                    >
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

export default TambahKendaraan;
