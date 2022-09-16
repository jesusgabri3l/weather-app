import { useGoogleSearch } from './useGoogleSearch';
// Reusable GoogleSearchComponent, it receives a callback function when the place is selected
// The callback function is to make it more reusable
function BaseGoogleSearch({ onPlaceSelected: onPlaceSelectedCallback }: any) {
  // Hook for the whole configuration logic for Google search api places
  const { value, setValue, inputRef } = useGoogleSearch(onPlaceSelectedCallback);
  return (
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
  );
}

export default BaseGoogleSearch;
