import axiosInstance from "helpers/axios";
import { getAllRuangan } from ".";

const deleteRuangan = (id, dispatch, Swal) => {
  axiosInstance
    .delete(`admin/ruangan/${id}`)
    .then((res) => {
      console.log(res.data);
      getAllRuangan(dispatch);

      Swal.fire("Terhapus!", "Data berhasil dihapus.", "success");
    })
    .catch((err) => {
      console.log(err.response.data);
      Swal.fire("Gagal Terhapus!", "Terjadi Kesalahan.", "error");
    });
};

export default deleteRuangan;
