import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import modalreducer from "./slices/modalSlice";

const store = configureStore({
    reducer: {
        products: productReducer,
        modal: modalreducer
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store