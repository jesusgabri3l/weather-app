import { combineReducers, configureStore } from '@reduxjs/toolkit';

import locationSlice from './location/locationSlice';

const rootReducer = combineReducers({
  location: locationSlice,
});
export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
