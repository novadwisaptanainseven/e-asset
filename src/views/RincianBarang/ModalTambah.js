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

import { Formik } from "formik";
import initState from "./Formik/initState";
import validationSchema from "./Formik/validationSchema";
import { getAllBidang } from "context/actions/EPekerjaAPI/Bidang";
import { insertRincianBarang } from "context/actions/RincianBarang";
import { LoadAnimationWhite } from "assets";

const ModalTambah = ({
  modal,
  setModal,
  value,
  label,
  setRincianBarang,
  setLoading: setLoadingRincianBarang,
}) => {
  const [bidang, setBidang] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Get all bidang
    getAllBidang(setBidang);
  }, []);

  const handleFormSubmit = (values) => {
    console.log(values);

    insertRincianBarang(
      value,
      values,
      setLoading,
      setRincianBarang,
      setLoadingRincianBarang
    );
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
            Tambah Rincian Barang <br />
            <br />
            <span className="text-muted">{label}</span>
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
          onSubmit={(e) => handleFormSubmit(e)}
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
                      <Label>Bidang</Label>
                      <Input
                        type="select"
                        id="id_bidang"
                        name="id_bidang"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.id_bidang || ""}
                        className={
                          errors.id_bidang && touched.id_bidang
                            ? "is-invalid"
                            : null
                        }
                      >
                        <option value="">-- Pilih Bidang --</option>
                        {bidang.map((item, index) => (
                          <option key={index} value={item.id_bidang}>
                            {item.nama_bidang}
                          </option>
                        ))}
                      </Input>
                      {errors.id_bidang && touched.id_bidang && (
                        <div className="invalid-feedback">
                          {errors.id_bidang}
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
                  </Col>
                  <Col>
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
                  </Col>
                </Row>
              </div>
              <div className="modal-footer">
                <Button
                  type="submit"
                  color="primary"
                  disabled={loading ? true : false}
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
