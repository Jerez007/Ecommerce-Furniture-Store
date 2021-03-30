import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  INCREASE_DECREASE_TOGGLE,
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
  sort: "price",
  increasing: true,
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
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(" products in useProductsContext() >>>>>", products);

  // Gets the initial data from products and finds the max price when products list changes
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
    console.log(`UseEffect  >>>>>>>>>>>>>>${Date()}`, products); //returns 0 lenght
  }, [products]);

  // Filters and sorts products when products list changes, or when sort and filter values are changed
  useEffect(() => {
    // dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters, state.increasing]);

  //Sets grid view
  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  // // Sets list view
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  // Toggles increase/decrease sort by value
  const increaseDecreaseToggle = () => {
    dispatch({ type: INCREASE_DECREASE_TOGGLE })
  }

  // gets the selected sort value
  const updateSort = (e) => {
    const value = e.target.value
    dispatch({ type: UPDATE_SORT, payload: value });
  }

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        increaseDecreaseToggle,
        updateSort,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
