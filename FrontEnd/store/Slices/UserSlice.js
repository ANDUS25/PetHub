import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  updateUser: JSON.parse(
    JSON.stringify(AsyncStorage.getItem('updatedUserProfile')),
  ),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateData: (state, action) => {
      let updatedUserProfile = state.updateUser={
        Name: action.payload.Name,
        Age: action.payload.Age,
        Country: action.payload.Country,
        Email: action.payload.Email,
        SomeThingExtra: action.payload.SomeThingExtra,
        Contact: action.payload.Contact,
      };

      AsyncStorage.setItem(
        'updatedUserProfile',
        JSON.stringify(updatedUserProfile),
      );
    },
  },
});

export const {updateData} = userSlice.actions;
export default userSlice.reducer;
