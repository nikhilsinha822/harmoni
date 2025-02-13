import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface CategoriesState {
  categories: string[];
  loading: boolean;
  error: string | null;
  selectedCategory: string | null;
}

const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: null,
  selectedCategory: null,
};

export const fetchCategories = createAsyncThunk<string[]>(
  "categories/fetchCategories",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    return await response.json();
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch categories";
      });
  },
});

export const { setSelectedCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;


