import axiosInstance from "helpers/axios";
import { showAlertError } from "views/Barang/functions";
import { showAlertSuccess } from "views/Barang/functions";
import { getKendaraanPindah } from ".";

const insertKendaraanPindah = (
  idKendaraan,
  values,
  setLoading,
  setKendaraanPindah,
  setLoadingKendaraanPindah,
  setModal
) => {
  setLoading(true);

  let successMessage = "Pindah Kendaraan Berhasil";
  let failedMessage = "Pindah Kendaraan Gagal";

  axiosInstance
    .post(`kendaraan-pindah/create`, values)
    .then((res) => {
      console.log(res.data);
      showAlertSuccess(successMessage);
      setLoading(false);
      getKendaraanPindah(
        idKendaraan,
        setKendaraanPindah,
        setLoadingKendaraanPindah
      );
      setModal(false);
    })
    .catch((err) => {
      console.log(err.response.data);
      showAlertError(failedMessage, err.response.data.message, setLoading);
    });
};

export default insertKendaraanPindah;
