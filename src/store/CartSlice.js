import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = [];
const defaultCartData = { title: "", quantity: 0, total: 0, price: 0 };

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: cartInitialState,
  reducers: {
    setInitialCartData (state,action) {
      return [...action.payload];
    },
    updateCartValue(state, actions) {
      let { payload } = actions;
      let { title, price } = payload;

      const existingItem = state.find((item) => item.title === title);
      if (!existingItem) {
        let stateObj = {
          ...defaultCartData,
          title: title,
          price: price,
        };
        state.push(stateObj);
      }
    },
    updateQuantity(state, actions) {
      let { payload } = actions;
      const item = state.find((item) => item.title === payload.title);

      if (item) {
        // Update the item's quantity and total
        item.quantity += payload.quantity;
        item.total = item.quantity * item.price;

        // If quantity becomes 0, reset the item to defaultCartData
        if (item.quantity <= 0) {
          const index = state.findIndex((cartItem) => cartItem.title === payload.title);
          if (index !== -1) {
            state.splice(index, 1); // Remove the item from the array
          }
        }
      }
    },
  },
});


export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
