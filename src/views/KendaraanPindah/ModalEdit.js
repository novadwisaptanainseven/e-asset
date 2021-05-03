import React, { useEffect } from "react";
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
import optionsPegawai from "assets/dummyData/optionsPegawai";

const ModalEdit = ({ modalEdit, setModalEdit, kendaraan }) => {
  const { id } = modalEdit;

  useEffect(() => {
    if (id) {
      console.log(id);
    }
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
        <Form>
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
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Dari Pegawai</Label>
                  <Select
                    id="dari"
                    name="dari"
                    placeholder="-- Pilih Pegawai --"
                    // onChange={(opt) => setBarang(opt ? opt.value : "")}
                    // defaultInputValue={barang}
                    isSearchable
                    isClearable
                    options={optionsPegawai}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Ke Pegawai</Label>
                  <Select
                    id="ke"
                    name="ke"
                    placeholder="-- Pilih Pegawai --"
                    // onChange={(opt) => setBarang(opt ? opt.value : "")}
                    // defaultInputValue={barang}
                    isSearchable
                    isClearable
                    options={optionsPegawai}
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
      </Modal>
    </>
  );
};

export default ModalEdit;
