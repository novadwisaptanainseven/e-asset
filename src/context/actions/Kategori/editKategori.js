import axiosInstance from "helpers/axios";
import { showAlertError } from "helpers/functions";
import { showAlertSuccess } from "helpers/functions";

const editKategori = (id, values, setLoading, history) => {
  setLoading(true);

  let successMessage = "Ubah Kategori Berhasil";
  let failedMessage = "Ubah Kategori Gagal";

  let url = `/easset/admin/kategori`;

  axiosInstance
    .put(`admin/kategori/${id}`, values)
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

export default editKategori;
