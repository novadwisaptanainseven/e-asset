import axiosInstance from "helpers/axios";
import { getAllBarang } from "./getAllBarang";

export const deleteBarang = (id, dispatch, Swal) => {
  axiosInstance
    .delete(`barang/delete/${id}`)
    .then((res) => {
      console.log(res.data);
      getAllBarang(dispatch);

      Swal.fire("Terhapus!", "Data berhasil dihapus.", "success");
    })
    .catch((err) => {
      console.log(err.response.data);
      Swal.fire("Gagal Terhapus!", "Terjadi Kesalahan.", "error");
    });
};
