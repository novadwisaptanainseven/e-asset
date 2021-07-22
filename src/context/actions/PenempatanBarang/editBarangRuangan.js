import axiosInstance from "helpers/axios";
import { showAlertError } from "views/PenempatanBarang/functions";
import { showAlertSuccess } from "views/PenempatanBarang/functions";
import getBarangRuangan from "./getBarangRuangan";

const editBarangRuangan = (
  idBarang,
  idBarangRuangan,
  values,
  setData,
  setLoading,
  setModal
) => {
  setLoading(true);

  let successMessage = "Update Penempatan Barang Berhasil";
  let failedMessage = "Update Penempatan Barang Gagal";

  axiosInstance
    .put(`admin/penempatan-barang/${idBarangRuangan}`, values)
    .then((res) => {
      console.log(res.data);
      showAlertSuccess(successMessage);
      getBarangRuangan(idBarang, setData, setLoading);
      setModal((prevValue) => ({
        ...prevValue,
        id: "",
        modal: false,
      }));
      setLoading(false);
    })
    .catch((err) => {
      console.log(err.response.data);
      setLoading(false);
      showAlertError(failedMessage, err.response.data.errors, setLoading);
    });
};

export default editBarangRuangan;
