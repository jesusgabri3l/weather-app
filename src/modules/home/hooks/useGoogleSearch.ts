import { useDispatch } from 'react-redux';

import { addLocation } from '../../../store/location/locationSlice';

export const useGoogleSearch = () => {
  const dispatch = useDispatch();
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

  return { onPlaceSelected };
};
