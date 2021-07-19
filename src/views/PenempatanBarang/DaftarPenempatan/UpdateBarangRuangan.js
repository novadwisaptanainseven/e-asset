import React, { useEffect } from "react";
import { Modal, Button, Input, FormGroup, Row, Col, Alert } from "reactstrap";

const UpdateBarangRuangan = ({ modal, setModal }) => {
  useEffect(() => {
    if (modal.id) {
      console.log(modal.id);
    }
  }, [modal]);

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
        <div className="modal-body">
          <Alert color="warning">
            <strong>Sisa barang sudah habis!</strong>. Tidak dapat menempatkan
            barang
          </Alert>
          <FormGroup>
            <label htmlFor="id_ruangan" className="form-control-label">
              Ruangan
            </label>
            <Input type="select" name="id_ruangan">
              <option value="">-- Pilih Ruangan --</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col>
                <label htmlFor="jumlah" className="form-control-label">
                  Jumlah
                </label>
                <Input
                  type="number"
                  min="0"
                  placeholder="Jumlah yang dipakai"
                />
              </Col>
              <Col>
                <label htmlFor="jumlah" className="form-control-label">
                  Sisa Barang Baik
                </label>
                <Input type="number" min="0" placeholder="Sisa barang" />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <label htmlFor="tgl_penempatan" className="form-control-label">
              Tgl. Update Penempatan Barang
            </label>
            <Input
              type="date"
              placeholder="Tanggal update penemapatan barang di Ruangan"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="keterangan" className="form-control-label">
              Keterangan
            </label>
            <Input type="textarea" rows={5} placeholder="Keterangan" />
          </FormGroup>
        </div>
        <div className="modal-footer">
          <Button color="primary">Simpan</Button>
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
      </Modal>
    </div>
  );
};

export default UpdateBarangRuangan;
