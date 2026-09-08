import { useEffect, useState } from 'react';

import { CurrentWeather, getWeatherByLocation } from '../../../../../services/weatherApi';

export const useFetchWeather = ({ lat, lng }: { lat: number; lng: number }) => {
  const [weather, setWeather] = useState<CurrentWeather | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let cancelled = false;

    const getWeatherInfo = async () => {
      try {
        const data = await getWeatherByLocation(lat, lng);
        if (!cancelled) setWeather(data);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    getWeatherInfo();
    return () => {
      cancelled = true;
    };
  }, [lat, lng]);

  return { weather, loading };
};
