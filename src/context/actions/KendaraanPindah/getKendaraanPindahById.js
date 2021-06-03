import axiosInstance from "helpers/axios";

const getKendaraanPindahById = (idKendaraanPindah, setData, setLoading) => {
  setLoading(true);

  axiosInstance
    .get(`kendaraan-pindah/detail/${idKendaraanPindah}`)
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

export default getKendaraanPindahById;
