import axiosInstance from "helpers/axios";
import { showAlertError } from "views/Barang/functions";
import { showAlertSuccess } from "views/Barang/functions";

export const editBarang = (id, values, setLoading, history) => {
  setLoading(true);

  let successMessage = "Edit Barang Berhasil";
  let failedMessage = "Edit Barang Gagal";

  axiosInstance
    .post(`admin/barang/${id}`, values, {
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
