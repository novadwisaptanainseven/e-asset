import React, { useState, useMemo, useEffect } from "react";
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
// import optionsPegawai from "assets/dummyData/optionsPegawai";

import { Formik } from "formik";
import {
  cekSelectError,
  // handleFormSubmit,
  setInitState,
  getNamaPegawai,
} from "./functions";
import validationSchema from "./Formik/validationSchema";
import { getKendaraanById } from "context/actions/Kendaraan";
import Loading from "components/Loading";
import { insertKendaraanPindah } from "context/actions/KendaraanPindah";
import { LoadAnimationWhite } from "assets";

const ModalTambah = ({
  modal,
  setModal,
  kendaraan,
  pegawai,
  setKendaraanPindah,
}) => {
  const [touchedSelectDari, setTouchedSelectDari] = useState(false);
  const [touchedSelectKe, setTouchedSelectKe] = useState(false);
  const [dataKendaraan, setDataKendaraan] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  useEffect(() => {
    if (kendaraan.value && modal) {
      getKendaraanById(kendaraan.value, setDataKendaraan, setLoading);
    }
  }, [kendaraan, modal]);

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

  const handleFormSubmit = (values) => {
    const inputVal = {
      id_kendaraan: kendaraan.value,
      tanggal: values.tanggal,
      dari: dataKendaraan.id_pegawai,
      ke: values.ke_pegawai,
      keterangan: values.keterangan,
    };

    insertKendaraanPindah(
      kendaraan.value,
      inputVal,
      setLoadingSubmit,
      setKendaraanPindah,
      setLoading,
      setModal
    );
    // console.log(inputVal);
  };

  return (
    <>
      <Modal
        className="modal-dialog-centered"
        isOpen={modal}
        toggle={() => setModal(!modal)}
        size="lg"
      >
        <div className="modal-header">
          <h3 className="modal-title" id="modal-title-default">
            Form Pindah Kendaraan
          </h3>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setModal(false)}
          >
            <span aria-hidden={true}>??</span>
          </button>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <Formik
            initialValues={setInitState("")}
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
                          value={kendaraan.label}
                          readOnly
                        />
                        <Input
                          type="hidden"
                          id="id_kendaraan"
                          name="id_kendaraan"
                          placeholder="Kendaraan"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={kendaraan.value}
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
                          <div className="invalid-feedback">
                            {errors.tanggal}
                          </div>
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
                          onChange={(opt) => {
                            setTouchedSelectDari(false);
                            setFieldValue("dari_pegawai", opt ? opt.value : "");
                          }}
                          onFocus={() => setTouchedSelectDari(true)}
                          defaultValue={{
                            value: dataKendaraan.id_pegawai,
                            label: getNamaPegawai(
                              dataKendaraan.id_pegawai,
                              pegawai
                            ),
                          }}
                          options={optionsPegawai}
                          isDisabled={true}
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
        )}
      </Modal>
    </>
  );
};

export default ModalTambah;
