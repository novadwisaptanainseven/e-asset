import axios from "axios";

const getAllPegawai = (setData) => {
  axios
    .get(localStorage.baseUrlEpekerja + `semua-pegawai`)
    .then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export default getAllPegawai;
