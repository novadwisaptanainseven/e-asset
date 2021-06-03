import Loading from "components/Loading";
import { getKendaraanPindahById } from "context/actions/KendaraanPindah";
import React, { useEffect, useState } from "react";
import { Modal } from "reactstrap";
import { getCleanTanggal } from "views/Kendaraan/functions";
import { getNamaPegawai } from "./functions";

const ModalDetail = ({ modalDetail, setModalDetail, pegawai }) => {
  const { id, modal } = modalDetail;
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      getKendaraanPindahById(id, setData, setLoading);
    }
  }, [id]);

  return (
    <>
      <Modal
        className="modal-dialog-centered"
        isOpen={modal}
        toggle={() =>
          setModalDetail({
            ...modalDetail,
            id: null,
            modal: !modal,
          })
        }
        size="lg"
      >
        <div className="modal-header">
          <h3 className="modal-title" id="modal-title-default">
            Detail Kendaraan Pindah
          </h3>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() =>
              setModalDetail({
                ...modalDetail,
                id: null,
                modal: !modal,
              })
            }
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          {loading ? (
            <Loading />
          ) : (
            <table cellPadding={5} style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <th width="25%">Tanggal</th>
                  <th width="3%">:</th>
                  <td>{data && getCleanTanggal(data.tanggal)}</td>
                </tr>
                <tr>
                  <th>Merk Kendaraan</th>
                  <th>:</th>
                  <td>{data && data.kendaraan.merk}</td>
                </tr>
                <tr>
                  <th>Tipe Kendaraan</th>
                  <th>:</th>
                  <td>{data && data.kendaraan.tipe}</td>
                </tr>
                <tr>
                  <th>Dari Pegawai</th>
                  <th>:</th>
                  <td>{data && getNamaPegawai(data.dari, pegawai)}</td>
                </tr>
                <tr>
                  <th>Ke Pegawai</th>
                  <th>:</th>
                  <td>{data && getNamaPegawai(data.ke, pegawai)}</td>
                </tr>
                <tr>
                  <th valign="top">Keterangan</th>
                  <th valign="top">:</th>
                  <td align="justify">{data.keterangan}</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ModalDetail;
