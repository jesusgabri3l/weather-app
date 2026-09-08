import { beforeEach, describe, expect, it } from 'vitest';

import { loadPersistedState, persistLocationState } from '../../store/sessionPersistence';
import type { RootState } from '../../store/store';
import { BarranquillaLocation } from '../mocks/locations';

const savedLocation = {
  id: BarranquillaLocation.id,
  name: BarranquillaLocation.name,
  admin1: BarranquillaLocation.admin1,
  country: BarranquillaLocation.country,
  lat: BarranquillaLocation.latitude,
  lng: BarranquillaLocation.longitude,
};

beforeEach(() => {
  sessionStorage.clear();
});

describe('sessionPersistence', () => {
  it('returns undefined when nothing was persisted yet', () => {
    expect(loadPersistedState()).toBeUndefined();
  });

  it('round-trips saved locations through sessionStorage', () => {
    const state = { location: { yourLocations: [savedLocation] } } as RootState;
    persistLocationState(state);

    expect(loadPersistedState()).toEqual({ location: { yourLocations: [savedLocation] } });
  });

  it('ignores malformed data instead of crashing', () => {
    sessionStorage.setItem('weather-app:locations', 'not json');
    expect(loadPersistedState()).toBeUndefined();

    sessionStorage.setItem('weather-app:locations', JSON.stringify([{ foo: 'bar' }]));
    expect(loadPersistedState()).toBeUndefined();
  });
});
