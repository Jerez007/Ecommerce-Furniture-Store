import {
  TOGGLE_SIDEBAR,
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_START,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const products_reducer = (state, action) => {
  // toggle sidebar
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, isSidebarOpen: !state.isSidebarOpen };
  }

  // =====> Section for PRODUCTS
  if (action.type === GET_PRODUCTS_START) {
    return { ...state, products_loading: true };
  }

  // Featured products fetched successfully
  if (action.type === GET_PRODUCTS_SUCCESS) {
    // Shuffle array
    // const shuffled = action.payload.sort(() => 0.5 - Math.random());

    // Get sub-array of first n elements after shuffled
    // let selected = shuffled.slice(0, 4);

    const featured_products = action.payload.filter(
      (product) => product.featured !== true
    );
    return {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products,
    };
  }

  //error
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_error: true, products_loading: false };
  }
  //=====> End of section for PRODUCTS

  // =====> Section for SINGLE PRODUCTS
  if (action.type === GET_SINGLE_PRODUCT_START) {
    return {
      ...state,
      single_product_loading: true,
      single_product_error: false,
    };
  }

  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product: action.payload,
      single_product_loading: false,
      single_product_error: false,
    };
  }

  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: true,
    };
  }
  // =====> End of section for SINGLE PRODUCTS

  throw new Error(`The action type "${action.type}" was not found`);
};

export default products_reducer;
