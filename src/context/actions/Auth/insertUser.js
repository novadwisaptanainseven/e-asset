import axiosInstance from "helpers/axios";
import { showAlertError } from "views/Users/functions";
import { showAlertSuccess } from "views/Users/functions";

export const insertUser = (values, setLoading, history) => {
  setLoading(true);

  let successMessage = "Tambah User Berhasil";
  let failedMessage = "Tambah User Gagal";

  axiosInstance
    .post(`user/create`, values)
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
