import axios, { AxiosResponse } from 'axios';

const apiURL: string = import.meta.env.VITE_WEATHER_API as string;
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export const api = axios.create({
  baseURL: apiURL,
});

export default {
  URL,
  getWeatherByLocation(lat: number, lng: number): Promise<AxiosResponse> {
    return api.get(`?appid=${apiKey}&lat=${lat}&lon=${lng}`);
  },
};
