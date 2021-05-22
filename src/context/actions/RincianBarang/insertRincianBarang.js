import axiosInstance from "helpers/axios";
import { showAlertError } from "views/Barang/functions";
import { showAlertSuccess } from "views/Barang/functions";
import { getRincianBarang } from ".";

const insertRincianBarang = (
  idBarang,
  values,
  setLoading,
  setDataRincianBarang,
  setLoadingRincianBarang
) => {
  setLoading(true);

  let successMessage = "Tambah Data Berhasil";
  let failedMessage = "Tambah Data Gagal";

  axiosInstance
    .post(`barang/${idBarang}/barang-detail/create`, {
      id_bidang: parseInt(values.id_bidang),
      jumlah_baik: values.jumlah_baik,
      jumlah_rusak: values.jumlah_rusak,
      jumlah_rusak_ringan: values.jumlah_rusak_ringan,
    })
    .then((res) => {
      console.log(res.data);
      showAlertSuccess(successMessage);
      setLoading(false);
      getRincianBarang(idBarang, setDataRincianBarang, setLoadingRincianBarang);
    })
    .catch((err) => {
      console.log(err.response.data);
      showAlertError(failedMessage, err.response.data.message, setLoading);
    });
};

export default insertRincianBarang;
