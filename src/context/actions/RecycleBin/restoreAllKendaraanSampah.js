import axiosInstance from "helpers/axios";
import { getKendaraanSampah } from ".";

const restoreAllKendaraanSampah = (dispatch, Swal, setLoading) => {
  setLoading(true);

  axiosInstance
    .put(`admin/kendaraan-restore`)
    .then((res) => {
      console.log(res.data);
      getKendaraanSampah(dispatch);
      setLoading(false);
      Swal.fire("Terpulihkan!", "Data berhasil dipulihkan.", "success");
    })
    .catch((err) => {
      console.log(err.response.data);
      setLoading(false);
      Swal.fire("Gagal Terpulihkan!", "Terjadi Kesalahan.", "error");
    });
};

export default restoreAllKendaraanSampah;
