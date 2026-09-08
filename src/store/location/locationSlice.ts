import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { GeocodingResult } from '../../services/geocodingApi';

export interface SavedLocation {
  id: number;
  name: string;
  admin1?: string;
  country?: string;
  lat: number;
  lng: number;
}

interface LocationState {
  yourLocations: SavedLocation[];
}

const initialState: LocationState = {
  yourLocations: [],
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    addLocation: (state, action: PayloadAction<GeocodingResult>) => {
      const { id, name, admin1, country, latitude, longitude } = action.payload;
      const alreadySaved = state.yourLocations.some((location) => location.id === id);
      if (alreadySaved) return;
      state.yourLocations.push({ id, name, admin1, country, lat: latitude, lng: longitude });
    },
  },
});

export const { addLocation } = locationSlice.actions;

export default locationSlice.reducer;
