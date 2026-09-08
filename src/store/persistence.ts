import type { RootState } from './store';
import type { SavedLocation } from './location/locationSlice';

const STORAGE_KEY = 'weather-app:locations';

function isSavedLocationArray(value: unknown): value is SavedLocation[] {
  return (
    Array.isArray(value) &&
    value.every(
      (item) =>
        item !== null &&
        typeof item === 'object' &&
        typeof item.id === 'number' &&
        typeof item.name === 'string' &&
        typeof item.lat === 'number' &&
        typeof item.lng === 'number',
    )
  );
}

export function loadPersistedState(): Partial<RootState> | undefined {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return undefined;

    const parsed: unknown = JSON.parse(raw);
    if (!isSavedLocationArray(parsed)) return undefined;

    return { location: { yourLocations: parsed } };
  } catch {
    return undefined;
  }
}

export function persistLocationState(state: RootState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.location.yourLocations));
  } catch {
    // localStorage unavailable (privacy mode, quota exceeded) — skip silently
  }
}
