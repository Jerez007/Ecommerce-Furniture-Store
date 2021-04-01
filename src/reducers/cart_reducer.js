import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, amount, product } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id);

    // update amount value if item is already in the cart
    if (tempItem) {
      const tempCart = state.cart.map((item) => {
        if (item.id === id) {
          let newAmount = item.amount + amount;

          // Makes sure that the new amount is not higher than the stock
          if (newAmount > item.max) {
            newAmount = item.max;
          }

          return { ...item, amount: newAmount };
        } else {
          return item;
        }
      });

      return { ...state, cart: tempCart };
    } else {
      // adds new time to cart
      const newItem = {
        id,
        name: product.name,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock, // ensures that users can't toggle the amount button beyond the stock number
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === REMOVE_CART_ITEM) {
    let tempCart = state.cart.filter((item) => item.id !== action.payload);

    return { ...state, cart: tempCart };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  throw new Error(`The action type "${action.type}" was not found`);
};

export default cart_reducer;
