import React, { createContext, useReducer } from "react";
import initState from "./initStates/initState";
import initStateMain from "./initStates/initStateMain";
import initStateRincianBarang from "./initStates/initStateRincianBarang";
import authReducer from "./reducers/Auth/authReducer";
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
    authReducer,
    initState
  );
  // Kategori
  const [kategoriState, kategoriDispatch] = useReducer(reducer, initState);
  // Ruangan
  const [ruanganState, ruanganDispatch] = useReducer(reducer, initState);
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

  // Recycle Bin
  // Barang
  const [barangSampahState, barangSampahDispatch] = useReducer(
    reducer,
    initStateMain
  );

  // Kendaraan
  const [kendaraanSampahState, kendaraanSampahDispatch] = useReducer(
    reducer,
    initStateMain
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
        kategoriState,
        kategoriDispatch,
        ruanganState,
        ruanganDispatch,
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
        barangSampahState,
        barangSampahDispatch,
        kendaraanSampahState,
        kendaraanSampahDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
