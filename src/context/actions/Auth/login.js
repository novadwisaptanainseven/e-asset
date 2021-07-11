import axiosInstance from "helpers/axios";
import { ERROR, LOADING, SUCCESS } from "../../actionTypes";

export const login = (values, dispatch) => {
  dispatch({
    type: LOADING,
  });

  axiosInstance
    .post("login", values)
    .then((res) => {
      localStorage.token = res.data.token;
      localStorage.level = res.data.user.level;
      localStorage.id_user = res.data.user.id;
      localStorage.loginTimestamp = new Date().getTime() + 1 * 60 * 60 * 1000; // Durasi login = 1 jam
      dispatch({
        type: SUCCESS,
        payload: res.data.user,
      });
      // Redirect to dashboard
      window.location.href = "/easset/admin";

      console.log(res.data);
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
        payload: err.response.data.message,
      });
      console.log(err.response.data);
    });
};
