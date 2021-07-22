import LoadingSubmit from "components/LoadingSubmit";
import { editBarangRuangan } from "context/actions/PenempatanBarang";
import { getBarangRuanganById } from "context/actions/PenempatanBarang";
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
import { setInitState } from "../functions";
import validationSchemaEdit from "./Formik/validationSchemaEdit";

const UpdateBarangRuangan = ({ modal, setModal, data, setData }) => {
  const [dataBarangRuangan, setDataBarangRuangan] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputVal, setInputVal] = useState({
    jumlah: 0,
  });
  const [alertBarangHabis, setAlertBarangHabis] = useState(false);
  const [sisaBarang, setSisaBarang] = useState("");

  // Get barang ruangan by id
  useEffect(() => {
    if (modal.id) {
      getBarangRuanganById(modal.id, setDataBarangRuangan, setLoading);
      setSisaBarang(data.jumlah_baik_tidak_terpakai);
    }
  }, [modal, data]);

  const checkSisaBarang = useCallback(() => {
    let sisa =
      data.jumlah_baik_tidak_terpakai +
      dataBarangRuangan.jumlah -
      inputVal.jumlah;
    setSisaBarang(sisa);

    if (sisa <= 0) {
      setAlertBarangHabis(true);
      setSisaBarang(0);
    } else {
      setAlertBarangHabis(false);
    }
  }, [inputVal, data, dataBarangRuangan]);

  useEffect(() => {
    if (dataBarangRuangan) {
      setInputVal({
        jumlah: dataBarangRuangan.jumlah,
      });
    }
  }, [dataBarangRuangan]);

  useEffect(() => {
    checkSisaBarang();
  }, [checkSisaBarang]);

  // Handle form submit
  const handleFormSubmit = (values) => {
    console.log(values);

    editBarangRuangan(
      data.barang.id_barang,
      modal.id,
      values,
      setData,
      setLoading,
      setModal
    );
  };

  return (
    <div>
      <Modal
        className="modal-dialog-centered"
        isOpen={modal.modal}
        toggle={() => setModal({ ...modal, id: "", modal: !modal.modal })}
        size="lg"
      >
        <div className="modal-header">
          <h3 className="modal-title" id="modal-title-default">
            Update Barang Ruangan
          </h3>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setModal({ ...modal, id: "", modal: false })}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <Formik
          initialValues={setInitState(dataBarangRuangan)}
          validationSchema={validationSchemaEdit}
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
                    readOnly
                    name="id_ruangan"
                    value={dataBarangRuangan.nama_ruangan}
                  />
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
                        value={values.jumlah || 0}
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
                        value={sisaBarang || 0}
                      />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="tgl_update" className="form-control-label">
                    Tgl. Update Penempatan Barang
                  </label>
                  <Input
                    type="date"
                    name="tgl_update"
                    placeholder="Tanggal update penemapatan barang di Ruangan"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tgl_update}
                    className={
                      errors.tgl_update && touched.tgl_update
                        ? "is-invalid"
                        : null
                    }
                  />
                  {errors.tgl_update && touched.tgl_update && (
                    <div className="invalid-feedback">{errors.tgl_update}</div>
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
                    value={values.keterangan || ""}
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
                  onClick={() => setModal({ ...modal, id: "", modal: false })}
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

export default UpdateBarangRuangan;
