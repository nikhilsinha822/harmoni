import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import modalreducer from "./slices/modalSlice";
import categoryReducer from "./slices/categorySlice"

const store = configureStore({
    reducer: {
        products: productReducer,
        modal: modalreducer,
        categories: categoryReducer
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store