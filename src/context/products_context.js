import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/products_reducer";
import { SIDEBAR_OPEN, SIDEBAR_CLOSE, TOGGLE_SIDEBAR } from "../actions";

const initialState = {
  isSidebarOpen: false,
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const openSidebar = () => {
  //   dispatch({ type: SIDEBAR_OPEN });
  // };

  // const closeSidebar = () => {
  //   dispatch({ type: SIDEBAR_CLOSE });
  // };

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  return (
    <ProductsContext.Provider
      value={{ ...state, toggleSidebar }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
