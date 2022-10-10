import { Link } from 'react-router-dom';

import BaseLoader from '../../../../../components/base/BaseLoader';
import SliderLocationsItemLabel from './SliderLocationsItemLabel';
import { useFetchWeather } from './useFetchWeather';

function SliderLocationsItem({ location, index }: any) {
  const { loading, weather } = useFetchWeather({ lat: location.lat, lng: location.lng });
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
          {/* Position 0 for the most specific location, for example :  Miami*/}
          {location.address_components[0].long_name}
        </h3>
        {/* Position 2 for the region location, for example :  Florida
          There are some cases where this does not appy, so position 2 would be the country
        */}
        <p className="text-gray font-bold text-lg truncate w-full md:text-xl">
          {location.address_components[2].long_name}
        </p>
        {/* Position 3 for the country location, for example :  United States
          There are some cases where this does not apply, so it is no needed
        */}
        {location.address_components.length > 3 && (
          <p className="text-gray text-lg truncate w-full">
            {location.address_components[3].long_name}
          </p>
        )}
      </div>
      {loading ? (
        <BaseLoader />
      ) : (
        <div className="w-full md:w-2/5">
          <div className="flex items-end md:flex-col">
            <div className="flex items-center">
              <h3
                className="text-white text-xl font-bold tracking-wide truncate w-4/5 inline-block md:text-2xl"
                data-testid="main-weather-test"
              >
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
          <div className="flex items-start flex-wrap gap-2.5 flex-col md:items-end">
            <SliderLocationsItemLabel
              label="Temperature"
              measure={weather.main.temp}
              getColor={true}
              unit="° c"
            />
            <SliderLocationsItemLabel
              label="Feels like"
              measure={weather.main.feels_like}
              getColor={true}
              unit="° c"
            />
            <SliderLocationsItemLabel
              label="Humidity"
              measure={weather.main.humidity}
              unit="%"
            />
            <SliderLocationsItemLabel
              label="Wind speed"
              measure={weather.wind.speed}
              unit="m/s"
            />
          </div>
        </div>
      )}
      <Link className="card__settings" to={`settings/${index}`}>
        <i className="fa-solid fa-gears"></i>
      </Link>
    </div>
  );
}

export default SliderLocationsItem;
