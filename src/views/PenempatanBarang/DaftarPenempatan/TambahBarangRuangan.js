import LoadingSubmit from "components/LoadingSubmit";
import { insertBarangRuangan } from "context/actions/PenempatanBarang";
import { getSelectRuangan } from "context/actions/Ruangan";
import { Formik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import {
  Modal,
  Button,
  Input,
  FormGroup,
  Row,
  Col,
  Alert,
  Form,
} from "reactstrap";
import initState from "./Formik/initState";
import validationSchema from "./Formik/validationSchema";

const TambahBarangRuangan = ({ modal, setModal, data, setData }) => {
  const [ruangan, setRuangan] = useState([]);
  const [alertBarangHabis, setAlertBarangHabis] = useState(false);
  const [sisaBarang, setSisaBarang] = useState("");
  const [inputVal, setInputVal] = useState({});
  const [loading, setLoading] = useState(false);

  const checkSisaBarang = useCallback(() => {
    let sisa = data.jumlah_baik_tidak_terpakai - inputVal.jumlah;
    setSisaBarang(sisa);

    if (sisa <= 0) {
      setAlertBarangHabis(true);
      setSisaBarang(0);
    } else {
      setAlertBarangHabis(false);
    }
  }, [inputVal, data]);

  useEffect(() => {
    checkSisaBarang();
  }, [checkSisaBarang]);

  // Get all ruangan
  useEffect(() => {
    if (modal) {
      getSelectRuangan(setRuangan);
      setSisaBarang(data.jumlah_baik_tidak_terpakai);
    }
  }, [modal, data]);

  // Handle form submit
  const handleFormSubmit = (values) => {
    const formData = new FormData();

    for (let item in values) {
      formData.append(item, values[item]);
    }

    for (let pair of formData.entries()) {
      console.log(pair);
    }

    insertBarangRuangan(
      data.barang.id_barang,
      formData,
      setData,
      setLoading,
      setModal
    );
  };

  return (
    <div>
      <Modal
        className="modal-dialog-centered"
        isOpen={modal}
        toggle={() => setModal(!modal)}
        size="lg"
      >
        <div className="modal-header">
          <h3 className="modal-title" id="modal-title-default">
            Tambah Barang Ruangan
          </h3>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setModal(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <Formik
          initialValues={initState}
          validationSchema={validationSchema}
          enableReinitialize={true}
          onSubmit={handleFormSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <Form onSubmit={handleSubmit}>
              <div className="modal-body">
                {alertBarangHabis && (
                  <Alert color="warning">
                    <strong>Sisa barang sudah habis!</strong>. Tidak dapat
                    menempatkan barang
                  </Alert>
                )}
                <FormGroup>
                  <label htmlFor="id_ruangan" className="form-control-label">
                    Ruangan
                  </label>
                  <Input
                    type="select"
                    name="id_ruangan"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.id_ruangan}
                    className={
                      errors.id_ruangan && touched.id_ruangan
                        ? "is-invalid"
                        : null
                    }
                  >
                    <option value="">-- Pilih Ruangan --</option>
                    {ruangan.map((item, index) => (
                      <option key={index} value={item.id_ruangan}>
                        {item.nama_ruangan}
                      </option>
                    ))}
                  </Input>
                  {errors.id_ruangan && touched.id_ruangan && (
                    <div className="invalid-feedback">{errors.id_ruangan}</div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col>
                      <label htmlFor="jumlah" className="form-control-label">
                        Jumlah
                      </label>
                      <Input
                        name="jumlah"
                        type="number"
                        min="0"
                        placeholder="Jumlah yang dipakai"
                        onChange={(e) => {
                          handleChange(e);
                          setInputVal({
                            ...inputVal,
                            [e.target.name]: e.target.value,
                          });
                        }}
                        onBlur={handleBlur}
                        value={values.jumlah}
                        className={
                          errors.jumlah && touched.jumlah ? "is-invalid" : null
                        }
                      />
                      {errors.jumlah && touched.jumlah && (
                        <div className="invalid-feedback">{errors.jumlah}</div>
                      )}
                    </Col>
                    <Col>
                      <label htmlFor="jumlah" className="form-control-label">
                        Sisa Barang Baik
                      </label>
                      <Input
                        readOnly
                        name="sisaBarang"
                        type="number"
                        min="0"
                        placeholder="Sisa barang"
                        value={sisaBarang}
                      />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <label
                    htmlFor="tgl_penempatan"
                    className="form-control-label"
                  >
                    Tgl. Penempatan
                  </label>
                  <Input
                    name="tgl_penempatan"
                    type="date"
                    placeholder="Tanggal Penempatan Barang di Ruangan"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tgl_penempatan}
                    className={
                      errors.tgl_penempatan && touched.tgl_penempatan
                        ? "is-invalid"
                        : null
                    }
                  />
                  {errors.tgl_penempatan && touched.tgl_penempatan && (
                    <div className="invalid-feedback">
                      {errors.tgl_penempatan}
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <label htmlFor="keterangan" className="form-control-label">
                    Keterangan
                  </label>
                  <Input
                    name="keterangan"
                    type="textarea"
                    rows={5}
                    placeholder="Keterangan"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.keterangan}
                    className={
                      errors.keterangan && touched.keterangan
                        ? "is-invalid"
                        : null
                    }
                  />
                  {errors.keterangan && touched.keterangan && (
                    <div className="invalid-feedback">{errors.keterangan}</div>
                  )}
                </FormGroup>
              </div>
              <div className="modal-footer">
                <Button
                  type="submit"
                  color="primary"
                  disabled={alertBarangHabis ? true : false}
                >
                  {loading ? <LoadingSubmit /> : "Simpan"}
                </Button>
                <Button
                  className="ml-auto"
                  color="link"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => setModal(false)}
                >
                  Tutup
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};

export default TambahBarangRuangan;
