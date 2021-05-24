import axiosInstance from "helpers/axios";
import { showAlertError } from "views/Barang/functions";
import { showAlertSuccess } from "views/Barang/functions";
import { getBarangPindah } from ".";

const insertBarangPindah = (
  idBarang,
  values,
  setLoading,
  setBarangPindah,
  setLoadingBarangPindah
) => {
  setLoading(true);

  let successMessage = "Pindah Barang Berhasil";
  let failedMessage = "Pindah Barang Gagal";

  axiosInstance
    .post(`barang/${idBarang}/barang-pindah/create`, values)
    .then((res) => {
      console.log(res.data);
      showAlertSuccess(successMessage);
      setLoading(false);
      getBarangPindah(idBarang, setBarangPindah, setLoadingBarangPindah);
    })
    .catch((err) => {
      console.log(err.response.data);
      showAlertError(failedMessage, err.response.data.message, setLoading);
    });
};

export default insertBarangPindah;
