import axiosInstance from "helpers/axios";
import { showAlertError } from "views/Barang/functions";
import { showAlertSuccess } from "views/Barang/functions";

export const insertBarang = (values, setLoading, history) => {
  setLoading(true);

  let successMessage = "Tambah Barang Berhasil";
  let failedMessage = "Tambah Barang Gagal";

  axiosInstance
    .post(`admin/barang`, values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      showAlertSuccess(successMessage, history);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err.response.data);
      showAlertError(failedMessage, err.response.data.message, setLoading);
    });
};
