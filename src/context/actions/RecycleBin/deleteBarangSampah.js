import axiosInstance from "helpers/axios";
import { getBarangSampah } from ".";

const deleteBarangSampah = (id, dispatch, Swal, setLoading) => {
  setLoading(true);

  axiosInstance
    .delete(`admin/barang-permanent-delete/${id}`)
    .then((res) => {
      console.log(res.data);
      getBarangSampah(dispatch);
      setLoading(false);
      Swal.fire("Terhapus!", "Data berhasil dihapus dari sampah.", "success");
    })
    .catch((err) => {
      console.log(err.response.data);
      setLoading(false);
      Swal.fire("Gagal Terhapus!", "Terjadi Kesalahan.", "error");
    });
};

export default deleteBarangSampah;
