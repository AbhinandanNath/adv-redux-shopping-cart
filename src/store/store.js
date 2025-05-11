import cartSliceReducer from './CartSlice';
import productSliceReducer from './ProductSlice';
import uiSliceReducer from './UiSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        cartState: cartSliceReducer,
        productState : productSliceReducer,
        uiState : uiSliceReducer
    },
});


export default store;