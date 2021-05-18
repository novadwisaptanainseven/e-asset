import React, { createContext, useReducer } from "react";
import initState from "./initStates/initState";
import initStateMain from "./initStates/initStateMain";
import loginReducer from "./reducers/loginReducer";
import reducer from "./reducers/reducer";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  // Login
  const [loginState, loginDispatch] = useReducer(loginReducer, initState);
  // Barang
  const [barangState, barangDispatch] = useReducer(reducer, initStateMain);
  // Riwayat Barang Pindah
  const [barangPindahState, barangPindahDispatch] = useReducer(reducer, initStateMain);
  // Kendaraan
  const [kendaraanState, kendaraanDispatch] = useReducer(reducer, initStateMain);
  // Kendaraan Pindah
  const [kendaraanPindahState, kendaraanPindahDispatch] = useReducer(reducer, initStateMain);

  return (
    <GlobalContext.Provider
      value={{
        loginState,
        loginDispatch,
        barangState,
        barangDispatch,
        barangPindahState,
        barangPindahDispatch,
        kendaraanState,
        kendaraanDispatch,
        kendaraanPindahState,
        kendaraanPindahDispatch
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
