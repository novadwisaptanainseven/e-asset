import axiosInstance from "helpers/axios";
import { getBarangRuangan } from ".";

export const deleteBarang = (idBarang, idBarangRuangan, setData, setLoading, Swal) => {
  axiosInstance
    .delete(`penempatan-barang/${idBarangRuangan}`)
    .then((res) => {
      console.log(res.data);
      getBarangRuangan(idBarang, setData, setLoading)

      Swal.fire("Terhapus!", "Data berhasil dihapus.", "success");
    })
    .catch((err) => {
      console.log(err.response.data);
      Swal.fire("Gagal Terhapus!", "Terjadi Kesalahan.", "error");
    });
};
