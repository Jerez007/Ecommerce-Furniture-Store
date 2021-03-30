import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  UPDATE_SORT,
  FILTER_PRODUCTS,
  UPDATE_PRODUCTS,
  CLEAR_FILTERS,
  INCREASE_DECREASE_TOGGLE,
} from "../actions";

const filter_reducer = (state, action) => {
  // Gets the maxium price from products. By default, filtered products is just set to products
  if (action.type === LOAD_PRODUCTS) {
    console.log(`filter REDUCER action.type === LOAD_PRODUCTS >>>>>>>>>>>>>>${Date()}`, action.payload); //returns 0 lenght

    // let highestPrice = action.payload.map((product) => product.price);
    // highestPrice = Math.max(...highestPrice);

    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      // filters: {
      //   ...state.filters,
      //   highest_price: highestPrice,
      //   price: highestPrice,
      // },
    };
  }

  // // Filters products
  // if (action.type === FILTER_PRODUCTS) {
  //   return {};
  // }

  // // Sorts products
  // if (action.type === SORT_PRODUCTS) {
  //   return {};
  // }

  // Sets products view to grid
  if (action.type === SET_GRIDVIEW) {
    return {
      ...state,
      grid_view: true,
    };
  }

  // Sets products view to list
  if (action.type === SET_LISTVIEW) {
    return {
      ...state,
      grid_view: false,
    };
  }

  // Toggles the sort by function to increasing/decreasing
  if (action.type === INCREASE_DECREASE_TOGGLE) {
    return {
      ...state, increasing: !state.increasing
    }
  }

  throw new Error(`The action type "${action.type}" was not found`);
};

export default filter_reducer;
