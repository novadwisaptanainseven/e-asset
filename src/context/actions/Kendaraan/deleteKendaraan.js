import axiosInstance from "helpers/axios";
import { getAllKendaraan } from "./getAllKendaraan";

const deleteKendaraan = (id, dispatch, Swal) => {
  axiosInstance
    .delete(`kendaraan/delete/${id}`)
    .then((res) => {
      console.log(res.data);
      getAllKendaraan(dispatch);

      Swal.fire("Terhapus!", "Data berhasil dihapus.", "success");
    })
    .catch((err) => {
      console.log(err.response.data);
      Swal.fire("Gagal Terhapus!", "Terjadi Kesalahan.", "error");
    });
};

export default deleteKendaraan;
