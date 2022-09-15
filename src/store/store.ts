import { configureStore } from '@reduxjs/toolkit';

import locationSlice from './location/locationSlice';
import userSlice from './user/userSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    location: locationSlice,
  },
});
