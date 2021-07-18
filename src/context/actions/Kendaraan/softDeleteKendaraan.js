import axiosInstance from "helpers/axios";
import { getAllKendaraan } from "./getAllKendaraan";

const softDeleteKendaraan = (id, dispatch, Swal) => {
  axiosInstance
    .delete(`admin/kendaraan-soft-delete/${id}`)
    .then((res) => {
      console.log(res.data);
      getAllKendaraan(dispatch);

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

export default softDeleteKendaraan;
