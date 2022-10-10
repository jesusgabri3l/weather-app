export const BarranquillaLocation = {
  address_components: [
    {
      long_name: 'Barranquilla',
      short_name: 'Barranquilla',
      types: ['locality', 'political'],
    },
    {
      long_name: 'Barranquilla',
      short_name: 'Barranquilla',
      types: ['administrative_area_level_2', 'political'],
    },
    {
      long_name: 'Atlantico',
      short_name: 'Atlantico',
      types: ['administrative_area_level_1', 'political'],
    },
    {
      long_name: 'Colombia',
      short_name: 'CO',
      types: ['country', 'political'],
    },
  ],
  lat: 11.0041072,
  lng: -74.80698129999999,
};

export const BarranquillaWeatherService = {
  coord: {
    lon: -74.807,
    lat: 11.0041,
  },
  weather: [
    {
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04d',
    },
  ],
  base: 'stations',
  main: {
    temp: 27.76,
    feels_like: 31.23,
    temp_min: 27.76,
    temp_max: 27.76,
    pressure: 1010,
    humidity: 78,
  },
  visibility: 10000,
  wind: {
    speed: 3.09,
    deg: 360,
  },
  clouds: {
    all: 75,
  },
  dt: 1665430065,
  sys: {
    type: 1,
    id: 8584,
    country: 'CO',
    sunrise: 1665398873,
    sunset: 1665441854,
  },
  timezone: -18000,
  id: 3689147,
  name: 'Barranquilla',
  cod: 200,
};
