import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

export const ProductSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
    product: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const {setProductData} = ProductSlice.actions;

export default ProductSlice.reducer;
