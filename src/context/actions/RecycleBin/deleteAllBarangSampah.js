import axiosInstance from "helpers/axios";
import { getBarangSampah } from ".";

const deleteAllBarangSampah = (dispatch, Swal, setLoading) => {
  setLoading(true);

  axiosInstance
    .delete(`admin/barang-permanent-delete`)
    .then((res) => {
      console.log(res.data);
      getBarangSampah(dispatch);
      setLoading(false);
      Swal.fire(
        "Terhapus!",
        "Semua data berhasil dihapus dari sampah.",
        "success"
      );
    })
    .catch((err) => {
      console.log(err.response.data);
      setLoading(false);
      Swal.fire("Gagal Terhapus!", "Terjadi Kesalahan.", "error");
    });
};

export default deleteAllBarangSampah;
