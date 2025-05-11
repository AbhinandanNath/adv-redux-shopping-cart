import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "uiState",
  initialState: { isCartOpen: false, isDataChangedLocally: false },
  reducers: {
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
    isDataChanged(state) {
      state.isDataChangedLocally = true;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
