import { useSelector } from 'react-redux';
import Slider from 'react-slick';

import getSliderSettings from './settingsSlider';
import SliderLocationsItem from './sliderItem/SliderLocationsItem';

function SliderLocations() {
  const locations = useSelector((state: any) => state.location.yourLocations);
  // Settings for the slider
  const settings = getSliderSettings(locations);
  return (
    <>
      {locations.length > 0 ? (
        <Slider {...settings}>
          {locations.map((location: any) => (
            <SliderLocationsItem
              location={location.basicInfo}
              key={location.basicInfo.lat}
            />
          ))}
        </Slider>
      ) : (
        <p className="text-white">You dont have locations yet</p>
      )}
    </>
  );
}

export default SliderLocations;
