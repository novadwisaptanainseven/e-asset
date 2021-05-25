import axiosInstance from "helpers/axios";

const getBarangMasukById = (idBarang, idBarangMasuk, setData, setLoading) => {
  setLoading(true);

  axiosInstance
    .get(`barang/${idBarang}/barang-masuk/detail/${idBarangMasuk}`)
    .then((res) => {
      console.log(res.data);
      setData(res.data.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err.response.data);
      setLoading(false);
    });
};

export default getBarangMasukById;
