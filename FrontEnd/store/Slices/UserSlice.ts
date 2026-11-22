import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserProfile, UserState } from '../../types';

const initialState: UserState = {
  updateUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<UserProfile>) => {
      state.updateUser = action.payload;
      AsyncStorage.setItem(
        'updatedUserProfile',
        JSON.stringify(action.payload),
      ).catch(() => {});
    },
  },
});

export const { updateData } = userSlice.actions;
export default userSlice.reducer;
