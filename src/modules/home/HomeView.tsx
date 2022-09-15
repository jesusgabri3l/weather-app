import AutoComplete from 'react-google-autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';

import location from '../../assets/location.svg';
import { addLocation } from '../../store/location/locationSlice';
import { useAuthOut } from '../login/hooks/useAuth';
import SlideItem from './components/SlideItem';
function HomeView() {
  const dispatch = useDispatch();
  const locations = useSelector((state: any) => state.location.yourLocations);
  const authOut = useAuthOut();
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: locations.length < 3 ? 1 : 3,
    slidesToScroll: 1,
    centerPadding: '0px',
    centerMode: true,
    focusOnSelect: true,
    adapativeHeight: true,
  };
  const onPlaceSelected = (place: any) => {
    const { address_components } = place;
    dispatch(
      addLocation({
        address_components,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      }),
    );
  };

  return (
    <div className="min-h-screen p-12">
      <AutoComplete
        apiKey={import.meta.env.VITE_GOOGLE_PLACES_API_KEY}
        onPlaceSelected={onPlaceSelected}
        language="en"
      />
      <div>
        <h1 className="text-white text-3xl font-bold tracking-wider inline-block">
          <img
            src={location}
            alt="illustration"
            className="inline-block mr-4"
            width="30"
            height="30"
          />
          Your favourite locations
        </h1>
      </div>
      {locations.length > 0 ? (
        <Slider {...settings}>
          {locations.map((location: any) => (
            <SlideItem location={location} key={location.basicInfo.lat} />
          ))}
        </Slider>
      ) : (
        <p className="text-white">You dont have locations yet</p>
      )}
      <div>
        <button onClick={authOut} className="button button--primary">
          Logout
        </button>
      </div>
    </div>
  );
}

export default HomeView;
