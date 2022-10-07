import location from '../../assets/location.svg';
import BaseGoogleSearch from '../../components/base/googleSearch/BaseGoogleSearch';
import SliderLocations from './components/slider/SliderLocations';
import { useGoogleSearchOnPlaceSelected } from './hooks/useGoogleSearchOnPlaceSelected';
function HomeView() {
  const { onPlaceSelectedPushLocationToStore } = useGoogleSearchOnPlaceSelected();
  return (
    <div data-testid="homeview-wrapper">
      <div className=" w-full md:w-2/5">
        <BaseGoogleSearch onPlaceSelected={onPlaceSelectedPushLocationToStore} />
      </div>
      <div className="mb-2 mt-12" data-testid="title-wrapper-test">
        <h1
          data-testid="title-test"
          className="text-white text-3xl font-bold tracking-wider inline-block md:text-4xl"
        >
          Your selected <span className="text-primary">locations</span>
          <img
            src={location}
            alt="illustration"
            className="inline-block ml-4"
            width="30"
            height="30"
          />
        </h1>
      </div>
      <SliderLocations />
    </div>
  );
}

export default HomeView;
