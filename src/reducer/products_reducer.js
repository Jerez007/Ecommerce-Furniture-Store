import { SIDEBAR_OPEN, SIDEBAR_CLOSE, TOGGLE_SIDEBAR } from "../actions";

const products_reducer = (state, action) => {
  // if (action.type === SIDEBAR_OPEN) {
  //   return { ...state, isSidebarOpen: true };
  // }

  // if (action.type === SIDEBAR_CLOSE) {
  //   return { ...state, isSidebarOpen: false };
  // }
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, isSidebarOpen: !state.isSidebarOpen};
  }
};

export default products_reducer;
