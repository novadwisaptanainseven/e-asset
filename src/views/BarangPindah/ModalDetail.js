import { getBarangPindahById } from "context/actions/BarangPindah";
import React, { useEffect, useState } from "react";
import { Modal } from "reactstrap";
import { getCleanTanggal, getNamaBidang } from "./functions";
import Loading from "components/Loading";

const ModalDetail = ({ bidang, barang = "", modalDetail, setModalDetail }) => {
  const { idBarang, id: idBarangPindah, modal } = modalDetail;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    if (idBarangPindah && barang.value) {
      // Get Barang Pindah By ID
      getBarangPindahById(barang.value, idBarangPindah, setData, setLoading);
    }
    if (idBarang && idBarangPindah) {
      getBarangPindahById(idBarang, idBarangPindah, setData, setLoading);
    }
  }, [idBarang, idBarangPindah, barang]);

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
                  <th>Dari Bidang</th>
                  <th>:</th>
                  <td>
                    {data &&
                      getNamaBidang(data.from_barang_detail.id_bidang, bidang)}
                  </td>
                </tr>
                <tr>
                  <th>Ke Bidang</th>
                  <th>:</th>
                  <td>
                    {data &&
                      getNamaBidang(data.to_barang_detail.id_bidang, bidang)}
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
