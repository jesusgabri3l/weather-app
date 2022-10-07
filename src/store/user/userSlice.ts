import { createSlice } from '@reduxjs/toolkit';
interface UserState {
  userInfo: {
    googleId: null | string;
    imageUrl?: null | string;
  };
}
const initialState: UserState = {
  userInfo: { googleId: '' },
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state: any, action: any) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
