import axios from 'axios';
import { useEffect, useState } from 'react';

function SlideItem({ location }: any) {
  const [weather, setWeather] = useState<any>(null);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    const getWeatherInfo = async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.basicInfo.lat}&lon=${location.basicInfo.lng}&appid=${apiKey}&units=metric`,
      );
      setWeather(data);
    };
    getWeatherInfo();
  }, []);
  const getColorByTemperature = (temp: number) => {
    if (temp <= 10) return 'text-super-cold';
    if (temp > 10 && temp <= 20) return 'text-cold';
    if (temp > 20 && temp <= 30) return 'text-avg';
    if (temp > 30) return 'text-hot';
  };
  return (
    <div className="p-6 pb-16 rounded-lg card md:p-8">
      <div className="w-full md:w-3/5">
        <h3 className="text-white text-2xl font-bold tracking-wide truncate w-full md:text-3xl">
          {location.basicInfo.address_components[0].long_name}
        </h3>
        <p className="text-gray font-bold text-lg truncate w-full md:text-xl">
          {location.basicInfo.address_components[2].long_name}
        </p>
        {location.basicInfo.address_components.length > 3 && (
          <p className="text-gray text-lg truncate w-full">
            {location.basicInfo.address_components[3].long_name}
          </p>
        )}
      </div>
      {weather && (
        <div className="w-full md:w-2/5">
          <div className="flex items-end md:flex-col">
            <div className="flex items-center">
              <h3 className="text-white text-xl font-bold tracking-wide truncate w-4/5 inline-block md:text-2xl">
                {weather.weather[0].main}
              </h3>
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="illustration"
                className="inline"
                width="80"
                height="80"
              />
            </div>
          </div>
          <div className="flex items-start flex-wrap gap-2.5 flex-col md:items-end md:gap-1">
            <div className="flex items-center">
              <p className="text-gray text-base font-medium">Temperature: </p>
              <p
                className={`text-lg ml-2 font-bold md:text-xl ${getColorByTemperature(
                  weather.main.temp,
                )}`}
              >
                {weather.main.temp}° c
              </p>
            </div>
            <div className="flex items-center mt-2">
              <p className="text-gray text-base font-medium">Feels like: </p>
              <p
                className={`text-lg ml-2 font-bold md:text-xl ${getColorByTemperature(
                  weather.main.feels_like,
                )}`}
              >
                {weather.main.feels_like}° c
              </p>
            </div>
            <div className="flex items-center mt-2">
              <p className="text-gray text-base font-medium">Humidity: </p>
              <p className="text-white text-lg ml-2 font-bold md:text-xl">
                {weather.main.humidity}%
              </p>
            </div>
            <div className="flex items-center mt-2">
              <p className="text-gray text-base font-medium">Wind speed: </p>
              <p className="text-white text-lg ml-2 font-bold md:text-xl">
                {weather.wind.speed} m/s
              </p>
            </div>
          </div>
        </div>
      )}
      <button className="card__settings">
        <i className="fa-solid fa-gears"></i>
      </button>
    </div>
  );
}

export default SlideItem;
