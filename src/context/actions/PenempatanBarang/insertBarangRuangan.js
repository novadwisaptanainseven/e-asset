import axiosInstance from "helpers/axios";
import { showAlertError } from "views/PenempatanBarang/functions";
import { showAlertSuccess } from "views/PenempatanBarang/functions";
import getBarangRuangan from "./getBarangRuangan";

const insertBarangRuangan = (
  idBarang,
  values,
  setData,
  setLoading,
  setModal
) => {
  setLoading(true);

  let successMessage = "Penempatan Barang Berhasil";
  let failedMessage = "Penempatan Barang Gagal";

  axiosInstance
    .post(`admin/barang/${idBarang}/penempatan-barang`, values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      showAlertSuccess(successMessage);
      getBarangRuangan(idBarang, setData, setLoading);
      setModal(false);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err.response.data);
      showAlertError(failedMessage, err.response.data.errors, setLoading);
    });
};

export default insertBarangRuangan;
