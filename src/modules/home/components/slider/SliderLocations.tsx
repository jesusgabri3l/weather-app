import { useSelector } from 'react-redux';
import Slider from 'react-slick';

import BaseAlert from '../../../../components/base/BaseInfoAlert';
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
          {locations.map((location: any, index: number) => (
            <SliderLocationsItem
              location={location.basicInfo}
              index={index}
              key={location.basicInfo.lat}
            />
          ))}
        </Slider>
      ) : (
        <BaseAlert
          title="Looks like you do not have any favourite location yet"
          description="You can add one by searching for a location on the input above"
        />
      )}
    </>
  );
}

export default SliderLocations;
