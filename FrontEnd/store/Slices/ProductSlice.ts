import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductData, ProductState } from '../../types';

const initialState: ProductState = {
  data: null,
};

export const ProductSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
    product: (state, action: PayloadAction<ProductData>) => {
      state.data = action.payload;
    },
    setProductData: (state, action: PayloadAction<ProductData>) => {
      state.data = action.payload;
    },
  },
});

export const { product, setProductData } = ProductSlice.actions;
export default ProductSlice.reducer;
