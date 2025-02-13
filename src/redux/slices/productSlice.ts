import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../types/product";

const API_BASE_URL = "https://fakestoreapi.com/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(API_BASE_URL);
      if (!response.ok) throw new Error("Failed to fetch products");
      return await response.json();
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Unknown error");
    }
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchByCategory",
  async (category: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/category/${category}`);
      if (!response.ok) throw new Error("Failed to fetch products by category");
      return await response.json();
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Unknown error");
    }
  }
);

interface ProductState {
  products: ProductType[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<ProductType[]>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action: PayloadAction<ProductType[]>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productSlice.reducer;
