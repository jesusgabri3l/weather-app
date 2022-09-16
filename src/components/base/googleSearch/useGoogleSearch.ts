import { useState } from 'react';
import { usePlacesWidget } from 'react-google-autocomplete';

export const useGoogleSearch = (onPlaceSelectedCallback: any) => {
  const [value, setValue] = useState<string>('');

  const onPlaceSelected = (place: any) => {
    if (place.geometry) {
      onPlaceSelectedCallback(place);
      setValue('');
    }
  };

  const { ref: inputRef }: any = usePlacesWidget({
    apiKey: import.meta.env.VITE_GOOGLE_PLACES_API_KEY,
    onPlaceSelected,
    language: 'en',
  });
  return { value, setValue, inputRef };
};
