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
import {
  cekSelectError,
  getNamaPegawai,
  // handleFormSubmit,
  setInitState,
} from "./functions";
import validationSchema from "./Formik/validationSchema";
import { getKendaraanPindahById } from "context/actions/KendaraanPindah";
import Loading from "components/Loading";
import { editKendaraanPindah } from "context/actions/KendaraanPindah";
import { LoadAnimationWhite } from "assets";

const ModalEdit = ({
  modalEdit,
  setModalEdit,
  kendaraan,
  pegawai,
  setKendaraanPindah,
}) => {
  const { id } = modalEdit;
  const [touchedSelectDari, setTouchedSelectDari] = useState(false);
  const [touchedSelectKe, setTouchedSelectKe] = useState(false);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  useEffect(() => {
    if (id && modalEdit.modal) {
      getKendaraanPindahById(id, setData, setLoading);
    }
  }, [id, modalEdit]);

  const handleFormSubmit = (values) => {
    const inputVal = {
      id_kendaraan: data.kendaraan.id_kendaraan,
      tanggal: data.tanggal,
      dari: data.dari,
      ke: data.ke,
      keterangan: values.keterangan,
    };

    editKendaraanPindah(
      data.kendaraan.id_kendaraan,
      id,
      inputVal,
      setLoadingSubmit,
      setKendaraanPindah,
      setLoading,
      setModalEdit
    );
    // console.log(inputVal);
  };

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
        {loading ? (
          <Loading />
        ) : (
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
                          disabled
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
                          isDisabled={true}
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
                            label: getNamaPegawai(data.dari, pegawai),
                            value: data.dari,
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
                          isDisabled={true}
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
                            label: getNamaPegawai(data.ke, pegawai),
                            value: data.ke,
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
        )}
      </Modal>
    </>
  );
};

export default ModalEdit;
