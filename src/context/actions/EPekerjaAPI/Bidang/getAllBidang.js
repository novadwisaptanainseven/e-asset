import axios from "axios";

const getAllBidang = (setData) => {
  axios
    .get(sessionStorage.baseUrlEpekerja + `bidang`)
    .then((res) => {
      // console.log(res.data.data);
      setData(res.data.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export default getAllBidang;
