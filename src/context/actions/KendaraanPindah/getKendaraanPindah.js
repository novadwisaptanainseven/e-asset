import axiosInstance from "helpers/axios";

const getKendaraanPindah = (idKendaraan, setData, setLoading) => {
  setLoading(true);

  axiosInstance
    .get(`kendaraan/${idKendaraan}/kendaraan-pindah/`)
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

export default getKendaraanPindah;
