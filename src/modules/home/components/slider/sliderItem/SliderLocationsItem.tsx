import BaseLoader from '../../../../../components/base/BaseLoader';
import type { SavedLocation } from '../../../../../store/location/locationSlice';
import { describeWeatherCode } from '../../../../../utils/weatherCode';
import SliderLocationsItemLabel from './SliderLocationsItemLabel';
import { useFetchWeather } from './useFetchWeather';

interface Props {
  location: SavedLocation;
  index: number;
}

function SliderLocationsItem({ location, index }: Props) {
  const { loading, weather } = useFetchWeather({ lat: location.lat, lng: location.lng });
  const weatherInfo = weather ? describeWeatherCode(weather.weatherCode) : null;

  return (
    <div
      className="p-6 pb-16 rounded-lg card md:p-8"
      data-testid={`slider-item-${index}`}
    >
      <div className="w-full md:w-3/5">
        <h3
          className="text-white text-2xl font-bold tracking-wide truncate w-full md:text-3xl"
          data-testid="location-weather-test"
        >
          {location.name}
        </h3>
        {location.admin1 && (
          <p className="text-gray font-bold text-lg truncate w-full md:text-xl">
            {location.admin1}
          </p>
        )}
        {location.country && (
          <p className="text-gray text-lg truncate w-full">{location.country}</p>
        )}
      </div>
      {loading || !weather || !weatherInfo ? (
        <BaseLoader />
      ) : (
        <div className="w-full md:w-2/5">
          <div className="flex items-end md:flex-col">
            <div className="flex items-center">
              <h3
                className="text-white text-xl font-bold tracking-wide truncate w-4/5 inline-block md:text-2xl"
                data-testid="main-weather-test"
              >
                {weatherInfo.description}
              </h3>
              <span className="inline-block text-4xl ml-2" aria-hidden="true">
                {weatherInfo.icon}
              </span>
            </div>
          </div>
          <div className="flex items-start flex-wrap gap-2.5 flex-col md:items-end">
            <SliderLocationsItemLabel
              label="Temperature"
              measure={weather.temperature}
              getColor={true}
              unit="° c"
            />
            <SliderLocationsItemLabel
              label="Feels like"
              measure={weather.feelsLike}
              getColor={true}
              unit="° c"
            />
            <SliderLocationsItemLabel label="Humidity" measure={weather.humidity} unit="%" />
            <SliderLocationsItemLabel
              label="Wind speed"
              measure={weather.windSpeed}
              unit="km/h"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SliderLocationsItem;
