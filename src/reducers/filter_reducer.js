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
    console.log(
      `filter REDUCER action.type === LOAD_PRODUCTS >>>>>>>>>>>>>>${Date()}`,
      action.payload
    ); //returns 0 lenght

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
      ...state,
      increasing: !state.increasing,
    };
  }

  // Updates the sort filter
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  // Sorts products based on sort type and ascending/descending option
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products, increasing } = state;
    let tempProducts = [...filtered_products];

    // sorts by increase/decreasing price
    if (sort === "price") {
      if (increasing) {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      } else {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
    }

    // sorts by ascending/descending product name
    if (sort === "product-name") {
      if (increasing) {
                tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name));

      } else {
                tempProducts = tempProducts.sort((a, b) =>
                  b.name.localeCompare(a.name)
                );
      }
    }

    return { ...state, filtered_products: tempProducts };
  }

  throw new Error(`The action type "${action.type}" was not found`);
};

export default filter_reducer;
