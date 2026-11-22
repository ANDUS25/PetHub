import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, SocialState, SocialUserData } from '../../types';

const initialState: SocialState = {
  userData: null,
  isAuthenticated: false,
};

export const SocialSlice = createSlice({
  name: 'GoogleSocialAuth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<SocialUserData | any>) => {
      state.userData = action.payload?.userData || action.payload;
      state.isAuthenticated = true;
    },
    logOut: (state) => {
      state.userData = null;
      state.isAuthenticated = false;
    },
  },
});

export const { logOut, login } = SocialSlice.actions;
export const selectUserData = (state: RootState) =>
  state.SocialReducer?.userData;
export const selectIsAuthenticated = (state: RootState) =>
  state.SocialReducer?.isAuthenticated;

export default SocialSlice.reducer;
