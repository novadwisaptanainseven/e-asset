import { SUCCESS } from "context/actionTypes";
import { ERROR } from "context/actionTypes";
import { LOADING } from "context/actionTypes";
import axiosInstance from "helpers/axios";

export const getAllBarang = (dispatch, filter, setLoadingFilter) => {
  dispatch({
    type: LOADING,
  });
  setLoadingFilter(true);

  let url = "";
  if (filter.jenisBarang) {
    url = `admin/barang?jenis_barang=${filter.jenisBarang}`;
  } else if (filter.kategori) {
    url = `admin/barang?kategori=${filter.kategori}`;
  } else {
    url = `admin/barang`;
  }

  axiosInstance
    .get(url)
    .then((res) => {
      dispatch({
        type: SUCCESS,
        payload: res.data,
      });
      setLoadingFilter(false);
      console.log(res.data);
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
        action: err.response.data,
      });
      setLoadingFilter(false);
      console.log(err.response.data);
    });
};
