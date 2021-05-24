import axiosInstance from "helpers/axios";

const getBarangPindahById = (idBarang, idBarangPindah, setData, setLoading) => {
  setLoading(true);

  axiosInstance
    .get(`barang/${idBarang}/barang-pindah/detail/${idBarangPindah}`)
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

export default getBarangPindahById;
