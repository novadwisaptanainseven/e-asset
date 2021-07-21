import axiosInstance from "helpers/axios";
import getBarangRuangan from ".";

export const softDeleteBarang = (id, dispatch, setLoadingFilter, Swal) => {
  axiosInstance
    .delete(`admin/barang-soft-delete/${id}`)
    .then((res) => {
      console.log(res.data);
      // getBarangRuangan(dispatch, "", setLoadingFilter);

      Swal.fire(
        "Terhapus!",
        "Data berhasil dipindahkan ke sampah (Recycle Bin).",
        "success"
      );
    })
    .catch((err) => {
      console.log(err.response.data);
      Swal.fire("Gagal Terhapus!", "Terjadi Kesalahan.", "error");
    });
};
