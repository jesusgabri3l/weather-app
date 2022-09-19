import location from '../../assets/location.svg';
import BaseGoogleSearch from '../../components/base/googleSearch/BaseGoogleSearch';
import SliderLocations from './components/slider/SliderLocations';
import { useGoogleSearch } from './hooks/useGoogleSearch';
function HomeView() {
  const { onPlaceSelected } = useGoogleSearch();
  return (
    <div>
      <div className=" w-full md:w-2/5">
        <BaseGoogleSearch onPlaceSelected={onPlaceSelected} />
      </div>
      <div className="mb-2 mt-12">
        <h1 className="text-white text-3xl font-bold tracking-wider inline-block md:text-4xl">
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
