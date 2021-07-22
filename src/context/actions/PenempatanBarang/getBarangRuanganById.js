import axiosInstance from "helpers/axios";

const getBarangRuanganById = (id, setData, setLoading) => {
  setLoading(true);

  axiosInstance
    .get(`admin/penempatan-barang/${id}`)
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

export default getBarangRuanganById;
