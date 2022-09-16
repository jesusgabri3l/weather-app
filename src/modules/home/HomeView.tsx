import { useState } from 'react';
import { usePlacesWidget } from 'react-google-autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';

import location from '../../assets/location.svg';
import { addLocation } from '../../store/location/locationSlice';
import SlideItem from './components/SlideItem';
function HomeView() {
  const dispatch = useDispatch();
  const locations = useSelector((state: any) => state.location.yourLocations);
  const user = useSelector((state: any) => state.user.userInfo);
  const [value, setValue] = useState<string>('');
  const [active, setActive] = useState<boolean>(false);
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
    responsive: [
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: locations.length < 3 ? 1 : 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const onPlaceSelected = (place: any) => {
    if (place.geometry) {
      const { address_components } = place;
      dispatch(
        addLocation({
          address_components,
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        }),
      );
      setValue('');
    }
  };

  const { ref: inputRef }: any = usePlacesWidget({
    apiKey: import.meta.env.VITE_GOOGLE_PLACES_API_KEY,
    onPlaceSelected,
    language: 'en',
  });

  return (
    <div className="min-h-screen p-12">
      <div className="search shadow rounded-lg">
        <input
          className="search__input"
          placeholder="Search for a location"
          ref={inputRef}
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
        />
        <i className="fa fa-search" />
      </div>
      <div className="profile">
        <button className="profile__button" onClick={() => setActive(!active)}>
          <img src={user.imageUrl} className="profile__img" alt="Profile" />
        </button>
        <div className={`profile__dropdown rounded-lg ${active && 'active'}`}>
          <ul className="profile__dropdown__list">
            <li className="profile__dropdown__list__item rounded-lg mb-2">
              <i className="fa-solid fa-gears mr-2"></i>
              <span className="profile__dropdown__list__item__text">Settings</span>
            </li>
            <li className="profile__dropdown__list__item rounded-lg mt-2">
              <i className="fa-solid fa-right-from-bracket mr-2" />
              <span className="profile__dropdown__list__item__text">Logout</span>
            </li>
          </ul>
          <button className="profile__dropdown__close" onClick={() => setActive(false)}>
            <i className="fa fa-times" />
          </button>
        </div>
      </div>
      <div className="mb-2 mt-6">
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
      {locations.length > 0 ? (
        <Slider {...settings}>
          {locations.map((location: any) => (
            <SlideItem location={location} key={location.basicInfo.lat} />
          ))}
        </Slider>
      ) : (
        <p className="text-white">You dont have locations yet</p>
      )}
    </div>
  );
}

export default HomeView;
