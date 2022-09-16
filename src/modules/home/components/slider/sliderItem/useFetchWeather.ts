import { useEffect, useState } from 'react';

import weatherApi from '../../../../../services/weatherApi';
export const useFetchWeather = ({ lat, lng }: { lat: number; lng: number }) => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getWeatherInfo = async () => {
      try {
        const { data } = await weatherApi.getWeatherByLocation(lat, lng);
        console.log(data);
        setWeather(data);
      } catch (error: any) {
        throw new Error(error);
      } finally {
        setLoading(false);
      }
    };
    getWeatherInfo();
  }, []);
  return { weather, loading };
};
