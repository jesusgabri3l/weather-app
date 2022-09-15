import { createSlice } from '@reduxjs/toolkit';

function createLocation({ address_components, lat, lng }: any) {
  return { basicInfo: { address_components, lat, lng }, criteria: [] };
}

export const locationSlice = createSlice({
  name: 'location',
  initialState: {
    yourLocations: [],
  },
  reducers: {
    addLocation: (state: any, action: any) => {
      const { address_components, lat, lng } = action.payload;
      state.yourLocations.push(createLocation({ address_components, lat, lng }));
    },
  },
});

export const { addLocation } = locationSlice.actions;

export default locationSlice.reducer;
