import axiosInstance from "helpers/axios";

export const cekUser = (userDispatch, Swal) => {
  axiosInstance
    .get("user")
    .then((res) => {
      console.log(res.data.user);
      userDispatch({
        type: "SAVE_USER",
        payload: res.data.user,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
