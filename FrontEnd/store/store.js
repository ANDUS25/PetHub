import {configureStore} from '@reduxjs/toolkit';
import ThemeReducer from './Slices/ThemeSlice';
import userSlice from './Slices/UserSlice';
import SocialReducer from './Slices/SocialSlice';
import CartSlice from './Slices/CartSlice';

export const store = configureStore({
  reducer: {ThemeReducer, SocialReducer, userSlice, CartSlice},
});
