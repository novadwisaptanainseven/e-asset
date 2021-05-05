import React from "react";
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

import { Formik } from "formik";
import initState from "./Formik/initState";
import validationSchema from "./Formik/validationSchema";

const ModalTambah = ({ modal, setModal, barang }) => {
  const handleFormSubmit = (values) => {
    console.log(values);
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
            Form Pindah Barang
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
          onSubmit={(values) => handleFormSubmit(values)}
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
                <Row>
                  <Col>
                    <FormGroup>
                      <Label>Barang yang Dipindahkan</Label>
                      <Input
                        type="text"
                        id="barang"
                        name="barang"
                        placeholder="Barang yang dipindahkan"
                        value={barang.label}
                        readOnly
                      />
                      <Input
                        type="hidden"
                        id="id_barang"
                        name="id_barang"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Barang yang dipindahkan"
                        value={barang.value}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Dari Bidang</Label>
                      <Input
                        type="select"
                        id="dari_bidang"
                        name="dari_bidang"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.dari_bidang || ""}
                        className={
                          errors.dari_bidang && touched.dari_bidang
                            ? "is-invalid"
                            : null
                        }
                      >
                        <option value="">-- Pilih Bidang --</option>
                        <option value="1">Perumahan</option>
                        <option value="2">Permukiman</option>
                        <option value="3">PSU</option>
                      </Input>
                      {errors.dari_bidang && touched.dari_bidang && (
                        <div className="invalid-feedback">
                          {errors.dari_bidang}
                        </div>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Label>Ke Bidang</Label>
                      <Input
                        type="select"
                        id="ke_bidang"
                        name="ke_bidang"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.ke_bidang || ""}
                        className={
                          errors.ke_bidang && touched.ke_bidang
                            ? "is-invalid"
                            : null
                        }
                      >
                        <option value="">-- Pilih Bidang --</option>
                        <option value="1">Perumahan</option>
                        <option value="2">Permukiman</option>
                        <option value="3">PSU</option>
                      </Input>
                      {errors.ke_bidang && touched.ke_bidang && (
                        <div className="invalid-feedback">
                          {errors.ke_bidang}
                        </div>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Label>Jumlah Baik</Label>
                      <Input
                        type="number"
                        id="jumlah_baik"
                        name="jumlah_baik"
                        placeholder="Jumlah Baik"
                        onChange={handleChange}
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
                      <Label>Jumlah Rusak</Label>
                      <Input
                        type="number"
                        id="jumlah_rusak"
                        name="jumlah_rusak"
                        placeholder="Jumlah Rusak"
                        onChange={handleChange}
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
                      <Label>Jumlah Rusak Ringan</Label>
                      <Input
                        type="number"
                        id="jumlah_rusak_ringan"
                        name="jumlah_rusak_ringan"
                        placeholder="Jumlah Rusak Ringan"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.jumlah_rusak_ringan || ""}
                        className={
                          errors.jumlah_rusak_ringan &&
                          touched.jumlah_rusak_ringan
                            ? "is-invalid"
                            : null
                        }
                      />
                      {errors.jumlah_rusak_ringan &&
                        touched.jumlah_rusak_ringan && (
                          <div className="invalid-feedback">
                            {errors.jumlah_rusak_ringan}
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
                <Button color="primary" type="submit">
                  Simpan
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
    </>
  );
};

export default ModalTambah;
