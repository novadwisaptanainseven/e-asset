import axiosInstance from "helpers/axios";

export const getBarangById = (id, setData, setLoading) => {
  setLoading(true);

  axiosInstance
    .get(`admin/barang/${id}`)
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
