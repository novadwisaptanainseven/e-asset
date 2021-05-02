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

const ModalTambah = ({ modal, setModal, barang }) => {
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
        <Form>
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
                    value={barang}
                    readOnly
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Dari Bidang</Label>
                  <Input type="select" id="dari_bidang" name="dari_bidang">
                    <option value="">-- Pilih Bidang --</option>
                    <option value="Perumahan">Perumahan</option>
                    <option value="Permukiman">Permukiman</option>
                    <option value="PSU">PSU</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label>Ke Bidang</Label>
                  <Input type="select" id="ke_bidang" name="ke_bidang">
                    <option value="">-- Pilih Bidang --</option>
                    <option value="Perumahan">Perumahan</option>
                    <option value="Permukiman">Permukiman</option>
                    <option value="PSU">PSU</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label>Jumlah Baik</Label>
                  <Input
                    type="number"
                    id="jumlah_baik"
                    name="jumlah_baik"
                    placeholder="Jumlah Baik"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Jumlah Rusak</Label>
                  <Input
                    type="number"
                    id="jumlah_rusak"
                    name="jumlah_rusak"
                    placeholder="Jumlah Rusak"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Jumlah Rusak Ringan</Label>
                  <Input
                    type="number"
                    id="jumlah_rusak_ringan"
                    name="jumlah_rusak_ringan"
                    placeholder="Jumlah Rusak Ringan"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Keterangan</Label>
                  <Input
                    type="textarea"
                    id="keterangan"
                    name="keterangan"
                    placeholder="Keterangan"
                    rows={7}
                  />
                </FormGroup>
              </Col>
            </Row>
          </div>
          <div className="modal-footer">
            <Button color="primary" type="button">
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
      </Modal>
    </>
  );
};

export default ModalTambah;
