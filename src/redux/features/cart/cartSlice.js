import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState = {
  selectedItems: [],
  cartItems: [],
  total: 0,
  deliveryDetails: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addOrder: (state, { payload }) => {
      state.cartItems = [...state.cartItems, payload];
    },
    removeOrder: (state, action) => {
      //   const orderId = action.payload;
      //   state.cartOrders = state.cartOrders.filter(
      //     (order) => order.id !== orderId
      //   );
    },
  },
});

export const { addOrder, removeOrder } = cartSlice.actions;

export default cartSlice.reducer;
