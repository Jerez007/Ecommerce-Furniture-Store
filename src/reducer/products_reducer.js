import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  TOGGLE_SIDEBAR,
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "../actions";

const products_reducer = (state, action) => {
  // if (action.type === SIDEBAR_OPEN) {
  //   return { ...state, isSidebarOpen: true };
  // }

  // if (action.type === SIDEBAR_CLOSE) {
  //   return { ...state, isSidebarOpen: false };
  // }
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, isSidebarOpen: !state.isSidebarOpen };
  }

  if (action.type === GET_PRODUCTS_START) {
    return { ...state, products_loading: true };
  }
};

export default products_reducer;
