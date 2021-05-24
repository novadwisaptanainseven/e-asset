const { CHANGE, CLEAN_UP } = require("../actionTypes");

const reducerRincianBarang = (state, action) => {
  switch (action.type) {
    case CHANGE:
      console.log("Data Change: ", action.payload);
      return {
        ...state,
        idBarang: action.payload.id_barang,
        labelBarang: action.payload.nama_barang,
      };
    case CLEAN_UP:
      return {
        ...state,
        idBarang: "",
        labelBarang: "",
      };
    default:
      return state;
  }
};

export default reducerRincianBarang;
