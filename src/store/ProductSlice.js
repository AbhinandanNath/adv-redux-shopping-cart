import { createSlice } from "@reduxjs/toolkit";

const productInitialState = {
  productData: [
    {
      title: "Test Product 1",
      price: 6,
      description: `This is the first product & it's amazing!`,
    },
    {
      title: "Test Product 2",
      price: 3,
      description: `This is the second product & it's not so amazing!`,
    },
  ],
  notificationData: null,
};

const productSlice = createSlice({
  name: "productState",
  initialState: productInitialState,
  reducers: {
    updateNotification(state, action) {
      let { status, message, title } = action.payload;
      state.notificationData = {
        status,
        message,
        title,
      };
    },
  },
});



export const productActions = productSlice.actions;

export default productSlice.reducer;
