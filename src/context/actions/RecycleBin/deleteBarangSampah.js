import axiosInstance from "helpers/axios";
import { getBarangSampah } from ".";

const deleteBarangSampah = (id, dispatch, Swal) => {
  axiosInstance
    .delete(`admin/barang-permanent-delete/${id}`)
    .then((res) => {
      console.log(res.data);
      getBarangSampah(dispatch);

      Swal.fire(
        "Terhapus!",
        "Semua data berhasil dihapus dari sampah.",
        "success"
      );
    })
    .catch((err) => {
      console.log(err.response.data);
      Swal.fire("Gagal Terhapus!", "Terjadi Kesalahan.", "error");
    });
};

export default deleteBarangSampah;
