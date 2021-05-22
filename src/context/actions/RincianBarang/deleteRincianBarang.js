import axiosInstance from "helpers/axios";
import { getRincianBarang } from ".";

const deleteRincianBarang = (
  idBarang,
  idBarangDetail,
  setRincianBarang,
  setLoading,
  Swal
) => {
  axiosInstance
    .delete(`barang/${idBarang}/barang-detail/delete/${idBarangDetail}`)
    .then((res) => {
      console.log(res.data);
      getRincianBarang(idBarang, setRincianBarang, setLoading);

      Swal.fire("Terhapus!", "Data berhasil dihapus.", "success");
    })
    .catch((err) => {
      console.log(err.response.data);
      Swal.fire("Gagal Terhapus!", "Terjadi Kesalahan.", "error");
    });
};

export default deleteRincianBarang;
