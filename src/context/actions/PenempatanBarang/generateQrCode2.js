import axiosInstance from "helpers/axios";
import getBarangRuangan from ".";

export const generateQrCode2 = (id, dispatch, setLoadingFilter) => {
  axiosInstance
    .put(`admin/barang-generate-qrcode/${id}`)
    .then((res) => {
      console.log(res.data);
      // getAllBarang(dispatch, "", setLoadingFilter);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
