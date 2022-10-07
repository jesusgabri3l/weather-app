import { useDispatch } from 'react-redux';

import { addLocation } from '../../../store/location/locationSlice';

export const useGoogleSearchOnPlaceSelected = () => {
  const dispatch = useDispatch();
  // This is being used as a callback function for the OnPlaceSelected event in the Google search component
  // Adds the location selected to the redux store - Locations slice
  const onPlaceSelectedPushLocationToStore = (place: any) => {
    const { address_components } = place;
    dispatch(
      addLocation({
        address_components,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      }),
    );
  };

  return { onPlaceSelectedPushLocationToStore };
};
