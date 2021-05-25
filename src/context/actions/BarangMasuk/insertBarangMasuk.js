import axiosInstance from "helpers/axios";
import { showAlertError } from "views/Barang/functions";
import { showAlertSuccess } from "views/Barang/functions";
import { getBarangMasuk } from ".";

const insertBarangMasuk = (
  idBarang,
  values,
  setLoading,
  setBarangMasuk,
  setLoadingBarangMasuk
) => {
  setLoading(true);

  let successMessage = "Pindah Barang Berhasil";
  let failedMessage = "Pindah Barang Gagal";

  axiosInstance
    .post(`barang/${idBarang}/barang-masuk/create`, values)
    .then((res) => {
      console.log(res.data);
      showAlertSuccess(successMessage);
      setLoading(false);
      getBarangMasuk(idBarang, setBarangMasuk, setLoadingBarangMasuk);
    })
    .catch((err) => {
      console.log(err.response.data);
      showAlertError(failedMessage, err.response.data.message, setLoading);
    });
};

export default insertBarangMasuk;
