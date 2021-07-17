import axiosInstance from "helpers/axios";
import { getAllKendaraan } from ".";

const generateQrCode2 = (id, dispatch) => {
  axiosInstance
    .put(`admin/kendaraan-generate-qrcode/${id}`)
    .then((res) => {
      console.log(res.data);
      getAllKendaraan(dispatch);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export default generateQrCode2;
