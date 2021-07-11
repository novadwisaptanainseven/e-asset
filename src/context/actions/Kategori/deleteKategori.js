import axiosInstance from "helpers/axios";
import { getAllKategori } from ".";

const deleteKategori = (id, dispatch, Swal) => {
  axiosInstance
    .delete(`admin/kategori/${id}`)
    .then((res) => {
      console.log(res.data);
      getAllKategori(dispatch);

      Swal.fire("Terhapus!", "Data berhasil dihapus.", "success");
    })
    .catch((err) => {
      console.log(err.response.data);
      Swal.fire("Gagal Terhapus!", "Terjadi Kesalahan.", "error");
    });
};

export default deleteKategori;
