import type { GeocodingResult } from '../../../services/geocodingApi';
import { useLocationSearch } from './useLocationSearch';

interface Props {
  onLocationSelected: (location: GeocodingResult) => void;
}

function formatSuggestion(location: GeocodingResult) {
  return [location.name, location.admin1, location.country].filter(Boolean).join(', ');
}

function LocationSearch({ onLocationSelected }: Props) {
  const { value, setValue, suggestions, loading, selectSuggestion } =
    useLocationSearch(onLocationSelected);

  return (
    <div className="search-wrapper">
      <div className="search">
        <input
          className="search__input"
          placeholder="Search for a location"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          data-testid="location-search-input"
          aria-label="Search for a location"
        />
        <i className="fa fa-search" aria-hidden="true" />
      </div>
      {(suggestions.length > 0 || loading) && (
        <ul className="search__suggestions" data-testid="search-suggestions">
          {loading && <li className="search__suggestions__item">Searching...</li>}
          {!loading &&
            suggestions.map((location) => (
              <li key={location.id}>
                <button
                  type="button"
                  className="search__suggestions__item"
                  onClick={() => selectSuggestion(location)}
                  data-testid={`suggestion-${location.id}`}
                >
                  {formatSuggestion(location)}
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default LocationSearch;
