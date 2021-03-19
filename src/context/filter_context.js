import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducer/filter_reducer";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";
import { useProductsContext } from "./products_context";

const initialState = {
  all_products: [],
  filtered_products: [],
  grid_view: true,
  sort: "price-lowest",
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { state, dispatch } = useReducer(reducer, initialState);
  const { products } = useProductsContext();

  // Gets the initial data from products and finds the max price when products list changes
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products})
  },[products])

  // Filters and sorts products when products list changes, or when sort and filter values are changed
  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS})
    dispatch({ type: SORT_PRODUCTS})
  },[products, state.sort, state.filters])

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW })
  }


  const setListView = () => {
    dispatch({ type: SET_LISTVIEW})
  }

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFiltersContext = () => {
  return useContext(FilterContext)
}