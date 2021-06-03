import { SUCCESS } from "context/actionTypes";
import { LOADING } from "context/actionTypes";
import axiosInstance from "helpers/axios";

export const getUserByIdDispatch = (id, dispatch) => {
  dispatch({
    type: LOADING,
  });

  axiosInstance
    .get(`user/detail/${id}`)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
