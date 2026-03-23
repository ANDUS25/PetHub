import {createSlice} from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'Cart',
  initialState: [],

  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    deleteProduct: (state, action) => {
      return state.filter(
        item =>
          item.data.id != action.payload.id ||
          item.data.Name != action.payload.name,
      );
    },
  },
});

export const {addProduct, deleteProduct} = CartSlice.actions;

export default CartSlice.reducer;
