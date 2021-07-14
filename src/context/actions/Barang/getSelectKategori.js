import axiosInstance from "helpers/axios";

const getSelectKategori = (setData) => {
  axiosInstance
    .get(`admin/kategori`)
    .then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export default getSelectKategori;
