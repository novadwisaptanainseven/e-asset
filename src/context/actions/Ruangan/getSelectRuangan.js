import axiosInstance from "helpers/axios";

const getSelectRuangan = (setData) => {
  axiosInstance
    .get(`admin/ruangan`)
    .then((res) => {
      console.log(res.data);
      setData(res.data.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export default getSelectRuangan;
