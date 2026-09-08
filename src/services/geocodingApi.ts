export interface GeocodingResult {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  admin1?: string;
  country?: string;
}

interface GeocodingResponse {
  results?: GeocodingResult[];
}

export async function searchLocations(query: string): Promise<GeocodingResult[]> {
  const url = new URL('https://geocoding-api.open-meteo.com/v1/search');
  url.searchParams.set('name', query);
  url.searchParams.set('count', '5');
  url.searchParams.set('language', 'en');
  url.searchParams.set('format', 'json');

  const response = await fetch(url);
  if (!response.ok) throw new Error('No se pudo buscar la ubicacion');

  const data: GeocodingResponse = await response.json();
  return data.results ?? [];
}
