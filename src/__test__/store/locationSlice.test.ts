import { describe, expect, it } from 'vitest';

import locationReducer, {
  addLocation,
  removeLocation,
} from '../../store/location/locationSlice';
import { BarranquillaLocation } from '../mocks/locations';

const initialState = { yourLocations: [] };

describe('locationSlice', () => {
  it('adds a location', () => {
    const state = locationReducer(initialState, addLocation(BarranquillaLocation));
    expect(state.yourLocations).toHaveLength(1);
    expect(state.yourLocations[0].name).toBe('Barranquilla');
  });

  it('does not add the same location twice', () => {
    const afterFirst = locationReducer(initialState, addLocation(BarranquillaLocation));
    const afterSecond = locationReducer(afterFirst, addLocation(BarranquillaLocation));
    expect(afterSecond.yourLocations).toHaveLength(1);
  });

  it('removes a location by id', () => {
    const withLocation = locationReducer(initialState, addLocation(BarranquillaLocation));
    const withoutLocation = locationReducer(
      withLocation,
      removeLocation(BarranquillaLocation.id),
    );
    expect(withoutLocation.yourLocations).toHaveLength(0);
  });

  it('removing an unknown id is a no-op', () => {
    const withLocation = locationReducer(initialState, addLocation(BarranquillaLocation));
    const result = locationReducer(withLocation, removeLocation(999999));
    expect(result.yourLocations).toHaveLength(1);
  });
});
