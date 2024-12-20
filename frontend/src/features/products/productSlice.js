import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addProduct, getProducts } from "./productService";

const initialState = {
  products: [],
  productLoading: false,
  productSuccess: false,
  productError: false,
  productMessage: "",
};

// call service function

export const addProductData = createAsyncThunk(
  "add-product",
  async (productData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      console.log(token);
      return await addProduct(productData, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

// get products

export const getProductData = createAsyncThunk(
  "get-products",
  async (_, thunkAPI) => {
    try {
      return await getProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

// create slice

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productReset: (state) => {
      state.productError = false;
      state.productLoading = false;
      state.productMessage = "";
      state.productSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProductData.pending, (state, action) => {
        state.productLoading = true;
      })
      .addCase(addProductData.rejected, (state, action) => {
        state.productLoading = false;
        state.productError = true;
        state.productMessage = action.payload;
      })
      .addCase(addProductData.fulfilled, (state, action) => {
        state.productLoading = false;
        state.productSuccess = true;
        state.products.push(action.payload);
      })
      .addCase(getProductData.pending, (state, action) => {
        state.productLoading = true;
      })
      .addCase(getProductData.rejected, (state, action) => {
        state.productLoading = false;
        state.productError = true;
        state.productMessage = action.payload;
      })
      .addCase(getProductData.fulfilled, (state, action) => {
        state.productLoading = false;
        state.productSuccess = true;
        state.products = action.payload;
      });
  },
});

export const { productReset } = productSlice.actions;
export default productSlice.reducer;
