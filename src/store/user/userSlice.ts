import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: { value: { googleId: null } },
    favCountries: [],
  },
  reducers: {
    setUserInfo: (state: any, action: any) => {
      state.userInfo.value = action.payload;
    },
  },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
