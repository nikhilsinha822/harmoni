import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../types/product";

interface ModalState {
  isOpen: boolean;
  selectedProduct: ProductType | null;
}

const initialState: ModalState = {
  isOpen: false,
  selectedProduct: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ProductType>) => {
      state.isOpen = true;
      state.selectedProduct = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.selectedProduct = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;