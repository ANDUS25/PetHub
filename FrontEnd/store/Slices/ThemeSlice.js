import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "light",
};

export const ThemeSlice = createSlice({
  name: "Theme",
  initialState,
  reducers: {
    Theme: (state) => {
      state.value = state.value === "light" ? "dark" : "light";
    },
  },
});

export const { Theme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
