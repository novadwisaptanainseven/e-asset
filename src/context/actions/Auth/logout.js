import axiosInstance from "helpers/axios";

export const logout = () => {
  axiosInstance
    .post("logout")
    .then((res) => {
      localStorage.clear();
      window.location.href = "/easset/auth/login";
    })
    .catch((err) => console.log(err.response.message));
};
