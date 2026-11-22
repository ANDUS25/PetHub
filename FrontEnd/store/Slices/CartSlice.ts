import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartState } from '../../types';

const initialState: CartState = [];

export const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartItem>) => {
      state.push(action.payload);
    },
    deleteProduct: (
      state,
      action: PayloadAction<{ id: string | number; name: string }>,
    ) => {
      return state.filter(
        (item) =>
          item.data.id !== action.payload.id ||
          item.data.Name !== action.payload.name,
      );
    },
    clearCart: () => {
      return [];
    },
  },
});

export const { addProduct, deleteProduct, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
