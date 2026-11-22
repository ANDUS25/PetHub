import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeMode, ThemeState } from '../../types';

const initialState: ThemeState = {
  value: 'light',
};

export const ThemeSlice = createSlice({
  name: 'Theme',
  initialState,
  reducers: {
    Theme: (state) => {
      state.value = state.value === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.value = action.payload;
    },
  },
});

export const { Theme, setTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
