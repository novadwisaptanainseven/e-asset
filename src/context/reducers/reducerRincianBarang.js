const { CHANGE } = require("../actionTypes");

const reducerRincianBarang = (state, action) => {
  switch (action.type) {
    case CHANGE:
      console.log("Data Change: ", action.payload);
      return {
        idBarang: action.payload,
      };

    default:
      return state;
  }
};

export default reducerRincianBarang;
