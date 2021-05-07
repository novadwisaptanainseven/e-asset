import React, { useEffect, useState } from "react";
import {
  Modal,
  Button,
  Row,
  Col,
  Form,
  Input,
  FormGroup,
  Label,
} from "reactstrap";
import Select from "react-select";
import { Formik } from "formik";
import optionsPegawai from "assets/dummyData/optionsPegawai";
import { cekSelectError, handleFormSubmit, setInitState } from "./functions";
import validationSchema from "./Formik/validationSchema";

const ModalEdit = ({ modalEdit, setModalEdit, kendaraan }) => {
  const { id } = modalEdit;
  const [touchedSelectDari, setTouchedSelectDari] = useState(false);
  const [touchedSelectKe, setTouchedSelectKe] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    if (id) {
      console.log(id);
    }
  }, [id]);

  useEffect(() => {
    setTimeout(() => {
      setData({
        id_kendaraan: id,
        tanggal: "2021-11-12",
        dari_pegawai: "Nova Dwi Sapta",
        ke_pegawai: "Purwanto",
        keterangan: "Lorem ipsum dolor sit amet",
      });
    }, 500);
  }, [id]);

  return (
    <>
      <Modal
        className="modal-dialog-centered"
        isOpen={modalEdit.modal}
        toggle={() =>
          setModalEdit({
            ...modalEdit,
            modal: !modalEdit.modal,
          })
        }
        size="lg"
      >
        <div className="modal-header">
          <h3 className="modal-title" id="modal-title-default">
            Edit Pindah Kendaraan
          </h3>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() =>
              setModalEdit({
                ...modalEdit,
                id: null,
                modal: false,
              })
            }
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <Formik
          initialValues={setInitState(data)}
          validationSchema={validationSchema}
          enableReinitialize
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
              <div className="modal-body">
                <Row>
                  <Col>
                    <FormGroup>
                      <Label>Kendaraan</Label>
                      <Input
                        type="text"
                        id="kendaraan"
                        name="kendaraan"
                        placeholder="Kendaraan"
                        value={kendaraan}
                        readOnly
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Tanggal</Label>
                      <Input
                        type="date"
                        id="tanggal"
                        name="tanggal"
                        placeholder="Tanggal"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.tanggal || ""}
                        className={
                          errors.tanggal && touched.tanggal
                            ? "is-invalid"
                            : null
                        }
                      />
                      {errors.tanggal && touched.tanggal && (
                        <div className="invalid-feedback">{errors.tanggal}</div>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Label>Dari Pegawai</Label>
                      <Select
                        styles={{
                          control: (provided, state) => ({
                            ...provided,
                            border:
                              errors.dari_pegawai && touchedSelectDari
                                ? "1px solid #fb6340"
                                : null,
                          }),
                        }}
                        id="dari_pegawai"
                        name="dari_pegawai"
                        placeholder="-- Pilih Pegawai --"
                        isSearchable
                        isClearable
                        defaultValue={{
                          label: data.dari_pegawai,
                          value: data.dari_pegawai,
                        }}
                        onChange={(opt) => {
                          setTouchedSelectDari(false);
                          setFieldValue("dari_pegawai", opt ? opt.value : "");
                        }}
                        onFocus={() => setTouchedSelectDari(true)}
                        options={optionsPegawai}
                      />
                      {!values.dari_pegawai && touchedSelectDari && (
                        <div
                          className="mt-1"
                          style={{ fontSize: "0.8em", color: "#fb6340" }}
                        >
                          {errors.dari_pegawai}
                        </div>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Label>Ke Pegawai</Label>
                      <Select
                        styles={{
                          control: (provided, state) => ({
                            ...provided,
                            border:
                              errors.ke_pegawai && touchedSelectKe
                                ? "1px solid #fb6340"
                                : null,
                          }),
                        }}
                        id="ke_pegawai"
                        name="ke_pegawai"
                        placeholder="-- Pilih Pegawai --"
                        isSearchable
                        isClearable
                        defaultValue={{
                          label: data.ke_pegawai,
                          value: data.ke_pegawai,
                        }}
                        onChange={(opt) => {
                          setTouchedSelectKe(false);
                          setFieldValue("ke_pegawai", opt ? opt.value : "");
                        }}
                        onFocus={() => setTouchedSelectKe(true)}
                        options={optionsPegawai}
                      />
                      {!values.ke_pegawai && touchedSelectKe && (
                        <div
                          className="mt-1"
                          style={{ fontSize: "0.8em", color: "#fb6340" }}
                        >
                          {errors.ke_pegawai}
                        </div>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Label>Keterangan</Label>
                      <Input
                        type="textarea"
                        id="keterangan"
                        name="keterangan"
                        placeholder="Keterangan"
                        rows={7}
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
                  </Col>
                </Row>
              </div>
              <div className="modal-footer">
                <Button
                  color="primary"
                  type="submit"
                  onClick={() => {
                    cekSelectError(values.dari_pegawai, setTouchedSelectDari);
                    cekSelectError(values.ke_pegawai, setTouchedSelectKe);
                  }}
                >
                  Simpan
                </Button>
                <Button
                  className="ml-auto"
                  color="link"
                  data-dismiss="modal"
                  type="button"
                  onClick={() =>
                    setModalEdit({
                      ...modalEdit,
                      id: null,
                      modal: false,
                    })
                  }
                >
                  Tutup
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default ModalEdit;
