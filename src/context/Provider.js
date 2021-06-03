import React, { createContext, useReducer } from "react";
import initState from "./initStates/initState";
import initStateMain from "./initStates/initStateMain";
import initStateRincianBarang from "./initStates/initStateRincianBarang";
import loginReducer from "./reducers/loginReducer";
import reducer from "./reducers/reducer";
import reducerRincianBarang from "./reducers/reducerRincianBarang";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  // Login
  const [loginState, loginDispatch] = useReducer(loginReducer, initState);
  // Users
  const [usersState, usersDispatch] = useReducer(reducer, initState);
  // Current User
  const [currentUserState, currentUserDispatch] = useReducer(
    loginReducer,
    initState
  );
  // Barang
  const [barangState, barangDispatch] = useReducer(reducer, initStateMain);
  // Riwayat Barang Pindah
  const [barangPindahState, barangPindahDispatch] = useReducer(
    reducer,
    initStateMain
  );
  // Riwayat Barang Masuk
  const [barangMasukState, barangMasukDispatch] = useReducer(
    reducer,
    initStateMain
  );
  // Kendaraan
  const [kendaraanState, kendaraanDispatch] = useReducer(
    reducer,
    initStateMain
  );
  // Kendaraan Pindah
  const [kendaraanPindahState, kendaraanPindahDispatch] = useReducer(
    reducer,
    initStateMain
  );

  // Rincian Barang
  const [rincianBarangState, rincianBarangDispatch] = useReducer(
    reducerRincianBarang,
    initStateRincianBarang
  );

  return (
    <GlobalContext.Provider
      value={{
        loginState,
        loginDispatch,
        currentUserState,
        currentUserDispatch,
        usersState,
        usersDispatch,
        barangState,
        barangDispatch,
        barangPindahState,
        barangPindahDispatch,
        barangMasukState,
        barangMasukDispatch,
        kendaraanState,
        kendaraanDispatch,
        kendaraanPindahState,
        kendaraanPindahDispatch,
        rincianBarangState,
        rincianBarangDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
