import axiosInstance from "helpers/axios";
import { getBarangSampah } from ".";

const restoreBarangSampah = (id, dispatch, Swal, setLoading) => {
  setLoading(true);

  axiosInstance
    .put(`admin/barang-restore/${id}`)
    .then((res) => {
      console.log(res.data);
      getBarangSampah(dispatch);
      setLoading(false);
      Swal.fire("Terpulihkan!", "Data berhasil dipulihkan.", "success");
    })
    .catch((err) => {
      console.log(err.response.data);
      setLoading(false);
      Swal.fire("Gagal Terpulihkan!", "Terjadi Kesalahan.", "error");
    });
};

export default restoreBarangSampah;
