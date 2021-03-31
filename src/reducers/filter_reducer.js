import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  UPDATE_SORT,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  UPDATE_PRODUCTS,
  CLEAR_FILTERS,
  INCREASE_DECREASE_TOGGLE,
} from "../actions";

const filter_reducer = (state, action) => {
  // Gets the maxium price from products. By default, filtered products is just set to products
  if (action.type === LOAD_PRODUCTS) {
    let highestPrice = action.payload.map((product) => product.price);
    highestPrice = Math.max(...highestPrice);

    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: {
        ...state.filters,
        max_price: highestPrice,
        price: highestPrice,
      },
    };
  }

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
        tempProducts = tempProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else {
        tempProducts = tempProducts.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
    }

    return { ...state, filtered_products: tempProducts };
  }

  // Updates filters
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  // Filters products
  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, category, company, color, price} = state.filters

    // gets a fresh copy of all the products. spread operator is used to override the values being overridden
    let tempProducts = [...all_products];

    // filters by the text in the search bar
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().includes(text.toLowerCase())
      })
    }

    return { ...state, filtered_products: tempProducts };
  }

  // Clears the filters and resets to initial default values
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
        filters: {
          ...state.filters,
          text: "",
          color: "all",
          category: "all",
          company: "all",
          price: state.filters.max_price, // sets default value to the max price
        },
    };
  }

  throw new Error(`The action type "${action.type}" was not found`);
};

export default filter_reducer;
