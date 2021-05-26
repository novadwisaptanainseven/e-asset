// import { getFile } from "context/actions/DownloadFile/getFile";
import React from "react";
import { Modal, Button } from "reactstrap";
import { getImagePegawai } from "../functions";

const ModalPreviewImagePegawai = ({ modal, setModal, data, pegawai }) => {
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
            Preview Gambar
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
          <img
            src={
              pegawai.length > 0
                ? getImagePegawai(data.id_pegawai, pegawai)
                : ""
            }
            alt="foto-barang"
            style={{ width: "100%" }}
          />
        </div>
        <div className="modal-footer">
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

export default ModalPreviewImagePegawai;
