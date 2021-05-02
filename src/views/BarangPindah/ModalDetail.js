import React, { useEffect } from "react";
import { Modal } from "reactstrap";

const ModalDetail = ({ modalDetail, setModalDetail }) => {
  const { id, modal } = modalDetail;

  useEffect(() => {
    if (id) {
      console.log(id);
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
            Detail Barang Pindah
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
          <table cellPadding={5} style={{ width: "100%" }}>
            <tbody>
              <tr>
                <th width="25%">Tanggal</th>
                <th width="3%">:</th>
                <td>27/11/2021</td>
              </tr>
              <tr>
                <th>Barang</th>
                <th>:</th>
                <td>Komputer</td>
              </tr>
              <tr>
                <th>Merk</th>
                <th>:</th>
                <td>Lenovo</td>
              </tr>
              <tr>
                <th>Dari Bidang</th>
                <th>:</th>
                <td>Perumahan</td>
              </tr>
              <tr>
                <th>Ke Bidang</th>
                <th>:</th>
                <td>Permukiman</td>
              </tr>
              <tr>
                <th>Jumlah Baik</th>
                <th>:</th>
                <td>10</td>
              </tr>
              <tr>
                <th>Jumlah Rusak</th>
                <th>:</th>
                <td>10</td>
              </tr>
              <tr>
                <th>Jumlah Rusak Ringan</th>
                <th>:</th>
                <td>10</td>
              </tr>
              <tr>
                <th valign="top">Keterangan</th>
                <th valign="top">:</th>
                <td align="justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente culpa ipsa architecto minus, aliquid cum qui optio
                  obcaecati inventore dolorum temporibus corrupti neque ad rem.
                  Nulla, dignissimos! Voluptatum, placeat reiciendis.{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal>
    </>
  );
};

export default ModalDetail;
