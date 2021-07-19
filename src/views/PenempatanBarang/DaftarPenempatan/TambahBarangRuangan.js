import React from "react";
import { Modal, Button, Input, FormGroup, Row, Col } from "reactstrap";

const TambahBarangRuangan = ({ modal, setModal }) => {
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
        <div className="modal-body">
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
              Tgl. Penempatan
            </label>
            <Input
              type="date"
              placeholder="Tanggal Penempatan Barang di Ruangan"
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
            onClick={() => setModal(false)}
          >
            Tutup
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default TambahBarangRuangan;
