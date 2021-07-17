import axiosInstance from "helpers/axios";
import { showAlertError } from "views/Kendaraan/functions";
import { showAlertSuccess } from "views/Kendaraan/functions";

const editKendaraan = (id, values, setLoading, history) => {
  setLoading(true);

  let successMessage = "Edit Kendaraan Berhasil";
  let failedMessage = "Edit Kendaraan Gagal";

  axiosInstance
    .post(`admin/kendaraan/${id}`, values, {
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

export default editKendaraan;
