import Loading from "components/Loading";
import { getBarangMasukById } from "context/actions/BarangMasuk";
import React, { useEffect, useState } from "react";
import { Modal } from "reactstrap";
import { getCleanTanggal, getNamaBidang } from "./functions";

const ModalDetail = ({ modalDetail, setModalDetail, bidang, barang = "" }) => {
  const { idBarang, id: idBarangMasuk, modal } = modalDetail;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    console.log(idBarangMasuk);
    // Get barang masuk by ID
    if (idBarangMasuk && barang.value) {
      // Jika value idBarangMasuk dan idBarang yang dipilih ada
      getBarangMasukById(barang.value, idBarangMasuk, setData, setLoading);
    }
    if (idBarang && idBarangMasuk) {
      getBarangMasukById(idBarang, idBarangMasuk, setData, setLoading);
    }
  }, [idBarang, idBarangMasuk, barang]);

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
            Detail Barang Masuk
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
                  <td>{data && getCleanTanggal(data.createdAt)}</td>
                </tr>
                <tr>
                  <th>Barang</th>
                  <th>:</th>
                  <td>{data && data.barang.nama_barang}</td>
                </tr>
                <tr>
                  <th>Merk</th>
                  <th>:</th>
                  <td>{data && data.barang.merk}</td>
                </tr>
                <tr>
                  <th>Ke Bidang</th>
                  <th>:</th>
                  <td>
                    {data &&
                      getNamaBidang(data.barang_detail.id_bidang, bidang)}
                  </td>
                </tr>
                <tr>
                  <th>Jumlah Baik</th>
                  <th>:</th>
                  <td>{data.jumlah_baik}</td>
                </tr>
                <tr>
                  <th>Jumlah Rusak</th>
                  <th>:</th>
                  <td>{data.jumlah_rusak}</td>
                </tr>
                <tr>
                  <th>Jumlah Rusak Ringan</th>
                  <th>:</th>
                  <td>{data.jumlah_rusak_ringan}</td>
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
