import axiosInstance from "helpers/axios";
import getKendaraanPindah from "./getKendaraanPindah";

const deleteKendaraanPindah = (
  idKendaraan,
  idKendaraanPindah,
  setKendaraanPindah,
  setLoading,
  Swal
) => {
  axiosInstance
    .delete(`kendaraan-pindah/delete/${idKendaraanPindah}`)
    .then((res) => {
      console.log(res.data);
      getKendaraanPindah(idKendaraan, setKendaraanPindah, setLoading);

      Swal.fire("Terhapus!", "Data berhasil dihapus.", "success");
    })
    .catch((err) => {
      console.log(err.response.data);
      Swal.fire("Gagal Terhapus!", "Terjadi Kesalahan.", "error");
    });
};

export default deleteKendaraanPindah;
