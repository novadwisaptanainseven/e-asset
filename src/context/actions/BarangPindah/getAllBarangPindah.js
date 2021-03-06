import { SUCCESS } from "context/actionTypes";
import { ERROR } from "context/actionTypes";
import { LOADING } from "context/actionTypes";
import axiosInstance from "helpers/axios";

export const getAllBarangPindah = (dispatch) => {
  dispatch({
    type: LOADING,
  });

  axiosInstance
    .get("barang-pindah")
    .then((res) => {
      dispatch({
        type: SUCCESS,
        payload: res.data,
      });
      console.log(res.data);
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
        action: err.response.data,
      });
      console.log(err.response.data);
    });
};
