import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
};

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getproduct: (state, action) => {
      state.products = action.payload;
    },
  },
});

export default ProductSlice.reducer;

export const { getproduct } = ProductSlice.actions;
