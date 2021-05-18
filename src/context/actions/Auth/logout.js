import axiosInstance from "helpers/axios";

export const logout = () => {
  axiosInstance
    .post("user/logout", {
      refreshToken: sessionStorage.refreshToken,
    })
    .then((res) => {
      sessionStorage.clear();
      window.location.href = "/easset/auth/login";
    })
    .catch((err) => console.log(err));
};
