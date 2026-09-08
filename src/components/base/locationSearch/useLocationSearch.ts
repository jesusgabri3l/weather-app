import { useEffect, useRef, useState } from 'react';

import { GeocodingResult, searchLocations } from '../../../services/geocodingApi';

export const useLocationSearch = (onLocationSelected: (location: GeocodingResult) => void) => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState<GeocodingResult[]>([]);
  const [loading, setLoading] = useState(false);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    clearTimeout(debounceTimer.current);

    const query = value.trim();

    debounceTimer.current = setTimeout(async () => {
      if (query.length < 3) {
        setSuggestions([]);
        return;
      }

      setLoading(true);
      try {
        const results = await searchLocations(query);
        setSuggestions(results);
      } catch {
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    }, 350);

    return () => clearTimeout(debounceTimer.current);
  }, [value]);

  const selectSuggestion = (location: GeocodingResult) => {
    onLocationSelected(location);
    setValue('');
    setSuggestions([]);
  };

  return { value, setValue, suggestions, loading, selectSuggestion };
};
