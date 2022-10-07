import { useEffect, useState } from 'react';

import weatherApi from '../../../../../services/weatherApi';
export const useFetchWeather = ({ lat, lng }: { lat: number; lng: number }) => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getWeatherInfo = async () => {
    try {
      const { data } = await weatherApi.getWeatherByLocation(lat, lng);
      setWeather(data);
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);
  return { weather, loading };
};
