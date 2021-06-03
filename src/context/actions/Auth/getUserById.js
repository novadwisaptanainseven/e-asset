import axiosInstance from "helpers/axios";

export const getUserById = (id, setData, setLoading) => {
  setLoading(true);

  axiosInstance
    .get(`user/detail/${id}`)
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
