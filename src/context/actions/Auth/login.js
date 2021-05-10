import axiosInstance from "helpers/axios";
import { ERROR, LOADING, SUCCESS } from "../../actionTypes";

export const login = (values, dispatch) => {
  dispatch({
    type: LOADING,
  });

  axiosInstance
    .post("user/login", values)
    .then((res) => {
      sessionStorage.token = res.data.accessToken;
      sessionStorage.refreshToken = res.data.refreshToken;
      sessionStorage.id_user = res.data.data.id_user;
      dispatch({
        type: SUCCESS,
        payload: res.data.data,
      });
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
