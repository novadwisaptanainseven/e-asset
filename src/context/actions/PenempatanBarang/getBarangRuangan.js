import axiosInstance from "helpers/axios";

const getBarangRuangan = (idBarang, setData, setLoading) => {
  setLoading(true);

  axiosInstance
    .get(`admin/barang/${idBarang}/penempatan-barang`)
    .then((res) => {
      setData(res.data.data);
      setLoading(false);
      console.log(res.data);
    })
    .catch((err) => {
      setLoading(false)
      console.log(err.response.data);
    });
};

export default getBarangRuangan;
