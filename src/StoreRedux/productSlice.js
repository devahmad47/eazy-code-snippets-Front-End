import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async () => {
//     try {
//       const response = await axios.get(
//         "https://fa-smart-tech-sol-server.vercel.app/api/product/get-all-products"
//       );
//       console.log("response", response);
//       return response.data.product;
//      // Assuming your response data is the array of products
//     } catch (error) {
//       throw new Error(error.message);
//     }

//   }

// );

const initialState = {
  loading: false,
  products: [],
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    request: (state) => {
      state.loading = true;
    },
    productSuccess: (state, action) => {
      console.log("success", action.payload);
      state.loading = false;
      state.products = action.payload;
    },
    failure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const selectProduct = (state) => state.product.products;
export const { request, productSuccess, failure } =
  productSlice.actions;

export default productSlice.reducer;
