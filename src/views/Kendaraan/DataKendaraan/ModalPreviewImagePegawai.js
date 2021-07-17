// import getFile from "context/actions/DownloadFile/getFile";
import { ProfileImageBlank } from "assets";
import { getImage } from "context/actions/EPekerjaAPI/DownloadFile";
import React from "react";
import { Modal, Button } from "reactstrap";
import { getImagePegawai } from "../functions";

const ModalPreviewImagePegawai = ({ modal, setModal, pengguna }) => {
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
            src={pengguna.length > 0 ? getImage(pengguna[0].pegawai.foto) : ProfileImageBlank}
            alt="foto-pegawai"
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
