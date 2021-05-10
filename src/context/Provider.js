import React, { createContext, useReducer } from "react";
import initState from "./initStates/initState";
import loginReducer from "./reducers/loginReducer";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  // Login
  const [loginState, loginDispatch] = useReducer(loginReducer, initState);

  return (
    <GlobalContext.Provider
      value={{
        loginState,
        loginDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
