import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/products_reducer";
import axios from "axios";
import { TOGGLE_SIDEBAR, GET_PRODUCTS_START, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR } from "../actions";
import { products_url as url } from "../utils/constants";


const initialState = {
  isSidebarOpen: false,
  featured_products: [],
  products_loading: false,
  products_error: false,
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  // gets the products
  const fetchProducts = async(url) => {
    dispatch({ type: GET_PRODUCTS_START})

    try {
      const response = await axios.get(url);
      const products = response.data
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products})
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR})
    }
  }

  //gets the products at initial render only
  useEffect(() => {
    fetchProducts(url);
  }, [])



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
