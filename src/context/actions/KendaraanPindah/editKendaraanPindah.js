import axiosInstance from "helpers/axios";
import { showAlertError } from "views/Barang/functions";
import { showAlertSuccess } from "views/Barang/functions";
import { getKendaraanPindah } from ".";

const editKendaraanPindah = (
  idKendaraan,
  idKendaraanPindah,
  values,
  setLoading,
  setKendaraanPindah,
  setLoadingKendaraanPindah,
  setModal
) => {
  setLoading(true);

  let successMessage = "Edit Pindah Kendaraan Berhasil";
  let failedMessage = "Edit Pindah Kendaraan Gagal";

  axiosInstance
    .put(`kendaraan-pindah/update/${idKendaraanPindah}`, values)
    .then((res) => {
      console.log(res.data);
      showAlertSuccess(successMessage);
      setLoading(false);
      getKendaraanPindah(
        idKendaraan,
        setKendaraanPindah,
        setLoadingKendaraanPindah
      );
      setModal((prevVal) => ({
        ...prevVal,
        modal: false,
      }));
    })
    .catch((err) => {
      console.log(err.response.data);
      showAlertError(failedMessage, err.response.data.message, setLoading);
    });
};

export default editKendaraanPindah;
