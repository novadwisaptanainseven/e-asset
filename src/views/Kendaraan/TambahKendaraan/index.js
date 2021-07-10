import React, { useCallback, useEffect, useMemo, useState } from "react";
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
// import optionsPegawai from "assets/dummyData/optionsPegawai";
import validationSchema from "../Formik/validationSchema";
import { getAllPegawai } from "context/actions/EPekerjaAPI/Pegawai";
import { insertKendaraan } from "context/actions/Kendaraan";
import { LoadAnimationWhite } from "assets";

const TambahKendaraan = () => {
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [touchedSelect, setTouchedSelect] = useState(false);
  const [hargaFormatRp, setHargaFormatRp] = useState("");
  const [biayaStnkFormatRp, setBiayaStnkFormatRp] = useState("");
  const [pegawai, setPegawai] = useState([]);
  const [loading, setLoading] = useState(false);

  const initState = setInitState("");

  // useEffect(() => {
  //   // Get All Pegawai
  //   getAllPegawai(setPegawai);
  // }, []);

  const optionsPegawai = useMemo(() => {
    let options = [];

    pegawai.forEach((item) => {
      options.push({
        value: item.id_pegawai,
        label: item.nama,
      });
    });

    return options;
  }, [pegawai]);

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

    for (const item in values) {
      formData.append(item, values[item]);
    }

    // formData.append("id_pegawai", values.id_pegawai);
    // formData.append("merk", values.merk);
    // formData.append("tipe", values.tipe);
    // formData.append("cc", values.cc);
    // formData.append("warna", values.warna);
    // formData.append("rangka", values.rangka);
    // formData.append("mesin", values.mesin);
    // formData.append("pembuatan", values.pembuatan);
    // formData.append("pembelian", values.pembelian);
    // formData.append("no_polisi", values.no_polisi);
    // formData.append("bpkb", values.bpkb);
    // formData.append("stnk", values.stnk);
    // formData.append("biaya_stnk", values.biaya_stnk);
    // formData.append("harga", values.harga);
    // formData.append("keterangan", values.keterangan);
    // formData.append("foto", values.foto);
    // formData.append("file", values.file);

    insertKendaraan(formData, setLoading, history);

    for (let item of formData.entries()) {
      console.log(item);
    }
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
                              htmlFor="kode_kendaraan"
                            >
                              Kode Kendaraan
                            </label>
                            <Input
                              type="text"
                              id="kode_kendaraan"
                              name="kode_kendaraan"
                              placeholder="Kode Kendaraan"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.kode_kendaraan || ""}
                              className={
                                errors.kode_kendaraan && touched.kode_kendaraan
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.kode_kendaraan &&
                              touched.kode_kendaraan && (
                                <div className="invalid-feedback">
                                  {errors.kode_kendaraan}
                                </div>
                              )}
                          </FormGroup>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="jenis_kendaraan"
                            >
                              Jenis Kendaraan
                            </label>
                            <Input
                              type="text"
                              id="jenis_kendaraan"
                              name="jenis_kendaraan"
                              placeholder="Jenis Kendaraan"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.jenis_kendaraan || ""}
                              className={
                                errors.jenis_kendaraan &&
                                touched.jenis_kendaraan
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.kode_kendaraan &&
                              touched.kode_kendaraan && (
                                <div className="invalid-feedback">
                                  {errors.kode_kendaraan}
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
                              htmlFor="bahan"
                            >
                              Bahan
                            </label>
                            <Input
                              type="text"
                              id="bahan"
                              name="bahan"
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
                              htmlFor="no_rangka"
                            >
                              No. Rangka
                            </label>
                            <Input
                              type="text"
                              id="no_rangka"
                              name="no_rangka"
                              placeholder="no_rangka"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.no_rangka || ""}
                              className={
                                errors.no_rangka && touched.no_rangka
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.no_rangka && touched.no_rangka && (
                              <div className="invalid-feedback">
                                {errors.no_rangka}
                              </div>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="no_mesin"
                            >
                              No. Mesin
                            </label>
                            <Input
                              type="text"
                              id="no_mesin"
                              name="no_mesin"
                              placeholder="No. Mesin"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.no_mesin || ""}
                              className={
                                errors.no_mesin && touched.no_mesin
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.no_mesin && touched.no_mesin && (
                              <div className="invalid-feedback">
                                {errors.no_mesin}
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
                              placeholder="No. pabrik"
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
                              htmlFor="no_polisi"
                            >
                              No. Polisi
                            </label>
                            <Input
                              type="text"
                              id="no_polisi"
                              name="no_polisi"
                              placeholder="No. polisi"
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
                        </Col>

                        <Col>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="tahun_pembuatan"
                            >
                              Tahun Pembuatan
                            </label>
                            <Input
                              type="text"
                              id="tahun_pembuatan"
                              name="tahun_pembuatan"
                              placeholder="Tahun Pembuatan"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.tahun_pembuatan || ""}
                              className={
                                errors.tahun_pembuatan &&
                                touched.tahun_pembuatan
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.tahun_pembuatan &&
                              touched.tahun_pembuatan && (
                                <div className="invalid-feedback">
                                  {errors.tahun_pembuatan}
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
                              type="text"
                              id="tahun_pembelian"
                              name="tahun_pembelian"
                              placeholder="Tahun Pembelian"
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
                              type="text"
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
                              type="text"
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
                              htmlFor="kondisi"
                            >
                              Kondisi
                            </label>
                            <Input
                              type="select"
                              id="kondisi"
                              name="kondisi"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.kondisi || ""}
                              className={
                                errors.kondisi && touched.kondisi
                                  ? "is-invalid"
                                  : null
                              }
                            >
                              <option value="baik">Baik</option>
                              <option value="rusak">Rusak</option>
                            </Input>
                            {errors.kondisi && touched.kondisi && (
                              <div className="invalid-feedback">
                                {errors.kondisi}
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

export default TambahKendaraan;
