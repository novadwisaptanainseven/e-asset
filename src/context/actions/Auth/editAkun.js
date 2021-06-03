import { SUCCESS } from "context/actionTypes";
import axiosInstance from "helpers/axios";
import { showAlertError } from "views/Barang/functions";
import { showAlertSuccess } from "views/Barang/functions";

export const editAkun = (idUser, values, setLoading, dispatch) => {
  setLoading(true);

  let successMessage = "Edit Akun Berhasil";
  let failedMessage = "Edit Akun Gagal";

  axiosInstance
    .put(`user/update/${idUser}`, values)
    .then((res) => {
      console.log(res.data);
      showAlertSuccess(successMessage);
      dispatch({
        type: SUCCESS,
        payload: res.data.data,
      });
      setLoading(false);
    })
    .catch((err) => {
      console.log(err.response.data);
      showAlertError(failedMessage, err.response.data.message, setLoading);
    });
};
