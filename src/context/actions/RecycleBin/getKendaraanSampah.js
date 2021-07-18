const { SUCCESS, LOADING, ERROR } = require("context/actionTypes");
const { default: axiosInstance } = require("helpers/axios");

const getKendaraanSampah = (dispatch) => {
  dispatch({
    type: LOADING,
  });

  axiosInstance
    .get(`admin/kendaraan-sampah`)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: SUCCESS,
        payload: res.data.data_trash,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch({
        type: ERROR,
        payload: err.response.data,
      });
    });
};

export default getKendaraanSampah;
