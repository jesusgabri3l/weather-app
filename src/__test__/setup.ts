import '@testing-library/jest-dom/vitest';

import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll } from 'vitest';

import { BarranquillaForecastResponse, BarranquillaGeocodingResponse } from './mocks/locations';

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

export const restHandlers = [
  http.get('https://geocoding-api.open-meteo.com/v1/search', () => {
    return HttpResponse.json(BarranquillaGeocodingResponse);
  }),
  http.get('https://api.open-meteo.com/v1/forecast', () => {
    return HttpResponse.json(BarranquillaForecastResponse);
  }),
];
const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
