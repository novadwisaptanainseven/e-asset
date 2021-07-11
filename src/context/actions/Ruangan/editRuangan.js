import axiosInstance from "helpers/axios";
import { showAlertError } from "helpers/functions";
import { showAlertSuccess } from "helpers/functions";

const editRuangan = (id, values, setLoading, history) => {
  setLoading(true);

  let successMessage = "Ubah Ruangan Berhasil";
  let failedMessage = "Ubah Ruangan Gagal";

  let url = `/easset/admin/ruangan`;

  axiosInstance
    .put(`admin/ruangan/${id}`, values)
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

export default editRuangan;
