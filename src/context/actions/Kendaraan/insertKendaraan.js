import axiosInstance from "helpers/axios";
import { showAlertError } from "views/Kendaraan/functions";
import { showAlertSuccess } from "views/Kendaraan/functions";

const insertKendaraan = (values, setLoading, history) => {
  setLoading(true);

  let successMessage = "Tambah Data Berhasil";
  let failedMessage = "Tambah Data Gagal";

  axiosInstance
    .post(`kendaraan/create`, values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      showAlertSuccess(successMessage);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err.response.data);
      showAlertError(failedMessage, err.response.data.message, setLoading);
    });
};

export default insertKendaraan;
