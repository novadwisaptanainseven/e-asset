import axiosInstance from "helpers/axios";
import { showAlertError } from "helpers/functions";
import { showAlertSuccess } from "helpers/functions";

const insertRuangan = (values, setLoading, history) => {
  setLoading(true);

  let successMessage = "Tambah Ruangan Berhasil";
  let failedMessage = "Tambah Ruangan Gagal";

  let url = "/easset/admin/ruangan";

  axiosInstance
    .post(`admin/ruangan`, values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      showAlertSuccess(successMessage, url, history);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err.response.data);
      showAlertError(failedMessage, err.response.data.message, setLoading);
    });
};

export default insertRuangan;
