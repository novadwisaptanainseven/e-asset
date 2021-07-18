import axiosInstance from "helpers/axios";
import { getBarangSampah } from ".";

const restoreAllBarangSampah = (dispatch, Swal) => {
  axiosInstance
    .put(`admin/barang-restore`)
    .then((res) => {
      console.log(res.data);
      getBarangSampah(dispatch);

      Swal.fire("Terpulihkan!", "Data berhasil dipulihkan.", "success");
    })
    .catch((err) => {
      console.log(err.response.data);
      Swal.fire("Gagal Terpulihkan!", "Terjadi Kesalahan.", "error");
    });
};

export default restoreAllBarangSampah;
