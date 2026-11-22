import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import CartReducer from './Slices/CartSlice';
import ProductReducer from './Slices/ProductSlice';
import SocialReducer from './Slices/SocialSlice';
import ThemeReducer from './Slices/ThemeSlice';
import UserReducer from './Slices/UserSlice';

export const store = configureStore({
  reducer: {
    ThemeReducer,
    SocialReducer,
    userSlice: UserReducer,
    CartSlice: CartReducer,
    ProductSlice: ProductReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
