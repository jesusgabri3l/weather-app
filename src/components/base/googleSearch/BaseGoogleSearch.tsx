import { useGoogleSearch } from './useGoogleSearch';
function BaseGoogleSearch({ onPlaceSelected: onPlaceSelectedCallback }: any) {
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
