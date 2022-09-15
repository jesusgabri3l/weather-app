import axios from 'axios';
import { useEffect, useState } from 'react';

function SlideItem({ location }: any) {
  console.log(location);
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
    <div className="bg-element p-8 rounded-lg card flex">
      <div className="w-3/5">
        <h3 className="text-white text-3xl font-bold tracking-wide truncate w-full">
          {location.basicInfo.address_components[0].long_name}
        </h3>
        <p className="text-gray font-bold text-xl truncate w-full">
          {location.basicInfo.address_components[2].long_name}
        </p>
        {location.basicInfo.address_components.length > 3 && (
          <p className="text-gray text-lg truncate w-full">
            {location.basicInfo.address_components[3].long_name}
          </p>
        )}
      </div>
      {weather && (
        <div className="w-2/5 flex flex-col items-end">
          <div className="flex items-center">
            <h3 className="text-white text-2xl font-bold tracking-wide truncate w-4/5 inline-block">
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
          <div className="flex items-center">
            <p className="text-gray text-base font-medium">Temperature: </p>
            <p
              className={`text-xl ml-2 font-bold ${getColorByTemperature(
                weather.main.temp,
              )}`}
            >
              {weather.main.temp}° c
            </p>
          </div>
          <div className="flex items-center mt-2">
            <p className="text-gray text-base font-medium">Feels like: </p>
            <p
              className={`text-xl ml-2 font-bold ${getColorByTemperature(
                weather.main.feels_like,
              )}`}
            >
              {weather.main.feels_like}° c
            </p>
          </div>
          <div className="flex items-center mt-2">
            <p className="text-gray text-base font-medium">Humidity: </p>
            <p className="text-white text-xl ml-2 font-bold">{weather.main.humidity}%</p>
          </div>
          <div className="flex items-center mt-2">
            <p className="text-gray text-base font-medium">Wind speed: </p>
            <p className="text-white text-xl ml-2 font-bold">{weather.wind.speed} m/s</p>
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
