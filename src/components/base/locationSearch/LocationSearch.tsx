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
      <div className="search shadow rounded-lg">
        <input
          className="search__input"
          placeholder="Search for a location"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          data-testid="location-search-input"
        />
        <i className="fa fa-search" />
      </div>
      {(suggestions.length > 0 || loading) && (
        <ul className="search__suggestions rounded-lg" data-testid="search-suggestions">
          {loading && <li className="search__suggestions__item">Searching...</li>}
          {!loading &&
            suggestions.map((location) => (
              <li
                key={location.id}
                className="search__suggestions__item"
                onClick={() => selectSuggestion(location)}
                data-testid={`suggestion-${location.id}`}
              >
                {formatSuggestion(location)}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default LocationSearch;
