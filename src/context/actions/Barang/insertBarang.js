import axiosInstance from "helpers/axios";
import { showAlertError } from "views/Barang/functions";
import { showAlertSuccess } from "views/Barang/functions";

export const insertBarang = (values, history, setLoading) => {
  setLoading(true);

  axiosInstance
    .post(`barang/create`, values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      showAlertSuccess(history);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err.response.data);
      showAlertError(err.response.data.message, setLoading);
    });
};
