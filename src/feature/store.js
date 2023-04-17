import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './services/cartSlice';

export const store = configureStore({
    reducer:{
        cart: cartSlice,
    }
});