import axiosInstance from "helpers/axios";

const getRincianBarang = (idBarang, setData, setLoading) => {
  setLoading(true);

  axiosInstance
    .get(`barang/${idBarang}/barang-detail/`)
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

export default getRincianBarang;
