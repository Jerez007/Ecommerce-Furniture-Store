import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import { useProductsContext } from "./products_context";

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

const initialState = {
  all_products: [],
  filtered_products: [],
  grid_view: true,
  sort: "price-lowest",
  filters: {
    text: "",
    color: "all",
    category: "all",
    company: "all",
    price: 0,
    min_price: 0,
    highest_price: 0,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProductsContext();

  // Gets the initial data from products and finds the max price when products list changes
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
    console.log('>>>>>>>>>>>>>>>>>>>>', products);
  }, [products]);

  // Filters and sorts products when products list changes, or when sort and filter values are changed
  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
