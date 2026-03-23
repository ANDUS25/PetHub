import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: null,
  isAuthenticated: false,
};

export const SocialSlice = createSlice({
  name: 'GoogleSocialAuth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userData = action.payload.userData;
      state.isAuthenticated = true;
    },
    logOut: state => {
      state.userData = null;
      state.isAuthenticated = false;
    },
  },
});

export const {logOut, login} = SocialSlice.actions;
export const selectUserData = state => state.googleAuth.userData;
export const selectIsAuthenticated = state => state.googleAuth.isAuthenticated;

export default SocialSlice.reducer;
