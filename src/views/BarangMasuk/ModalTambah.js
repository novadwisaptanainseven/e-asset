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
import validationSchema from "./Formik/validationSchema";
import initState from "./Formik/initState";
import { getRincianBarang } from "context/actions/RincianBarang";
import { getNamaBidang } from "./functions";
import { insertBarangMasuk } from "context/actions/BarangMasuk";
import { LoadAnimationWhite } from "assets";

const ModalTambah = ({
  modal,
  setModal,
  barang,
  setBarangMasuk,
  setLoading: setLoadingBarangMasuk,
  bidang,
}) => {
  const [loading, setLoading] = useState([]);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [rincianBarang, setRincianBarang] = useState([]);

  console.log(loading);

  useEffect(() => {
    // Get Rincian Barang
    if (barang.value) {
      getRincianBarang(barang.value, setRincianBarang, setLoading);
    }
  }, [barang]);

  const handleFormSubmit = (values) => {
    const inputVal = {
      id_barang_detail: parseInt(values.ke_bidang),
      jumlah_baik: values.jumlah_baik,
      jumlah_rusak: values.jumlah_rusak,
      jumlah_rusak_ringan: values.jumlah_rusak_ringan,
      keterangan: values.keterangan,
    };

    insertBarangMasuk(
      barang.value,
      inputVal,
      setLoadingSubmit,
      setBarangMasuk,
      setLoadingBarangMasuk
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
            Form Barang Masuk
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
                      <Label>Barang yang Dimasukkan</Label>
                      <Input
                        type="text"
                        id="barang"
                        name="barang"
                        placeholder="Barang yang dimasukkan"
                        value={barang.label}
                        readOnly
                      />
                      <Input
                        type="hidden"
                        id="id_barang"
                        name="id_barang"
                        placeholder="Barang yang dimasukkan"
                        value={barang.value}
                      />
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
                        {rincianBarang.map((item, index) => (
                          <option key={index} value={item.id_barang_detail}>
                            {getNamaBidang(item.id_bidang, bidang)}
                          </option>
                        ))}
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
                      <div className="text-muted text-sm mt-1">
                        Isi jika ada jumlah barang baik masuk | Jumlah efault :
                        0
                      </div>
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
                      <div className="text-muted text-sm mt-1">
                        Isi jika ada jumlah barang rusak masuk | Jumlah Default
                        : 0
                      </div>
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
                      <div className="text-muted text-sm mt-1">
                        Isi jika ada jumlah barang rusak ringan masuk | Jumlah
                        Default : 0
                      </div>
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
