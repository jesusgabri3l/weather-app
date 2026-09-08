import { useDispatch } from 'react-redux';

import type { GeocodingResult } from '../../../services/geocodingApi';
import { addLocation } from '../../../store/location/locationSlice';

export const useLocationSelected = () => {
  const dispatch = useDispatch();

  const onLocationSelected = (location: GeocodingResult) => {
    dispatch(addLocation(location));
  };

  return { onLocationSelected };
};
