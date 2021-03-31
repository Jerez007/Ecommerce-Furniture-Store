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

const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 999,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Adds product to the cart
  const addToCart = (id, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: {id, amount, product} });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
