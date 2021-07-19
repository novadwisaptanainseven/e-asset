import axiosInstance from "helpers/axios";
import { getKendaraanSampah } from ".";

const deleteAllKendaraanSampah = (dispatch, Swal, setLoading) => {
  setLoading(true);

  axiosInstance
    .delete(`admin/kendaraan-permanent-delete`)
    .then((res) => {
      console.log(res.data);
      getKendaraanSampah(dispatch);
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

export default deleteAllKendaraanSampah;
