import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import axios from "axios";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

// Checks local storage for cart items.
const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");

  if (cart) {
    return JSON.parse(localStorage.getItem("cart")); //parses the string back into JSON
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(), // Value depends on whether or not there are cart items in local storage
  total_items: 0,
  total_amount: 0,
  shipping_fee: 999,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Adds product to the cart
  const addToCart = (id, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, amount, product } });
  };

  // Removes product from the cart
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  // Toggles(increase/decrease) amount of product in the cart
  const toggleAmount = (id, value) => {};

  // Clears all items in the cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  // Gets invoked everytime cart changes and saves to local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart)); // must be stored as a string
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
