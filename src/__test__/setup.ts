import '@testing-library/jest-dom';

import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll } from 'vitest';

import { BarranquillaWeatherService } from './mocks/locations';

const apiURL: string = import.meta.env.VITE_WEATHER_API as string;

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
  rest.get(`${apiURL}`, (req, res, ctx) => {
    //const locationLat = req.url.searchParams.get('lat');
    //const locationLng = req.url.searchParams.get('lon');
    return res(ctx.status(200), ctx.json(BarranquillaWeatherService));
  }),
  rest.get(
    'https://accounts.google.com/o/oauth2/iframerpc?action=checkOrigin&origin=http://localhost:3000&client_id=467817508495-gjud3su6qr8slg3v3q80iom0nhc6e3j8.apps.googleusercontent.com',
    (req, res, ctx) => {
      //const locationLat = req.url.searchParams.get('lat');
      //const locationLng = req.url.searchParams.get('lon');
      return res(
        ctx.status(200),
        ctx.json({
          valid: true,
          blocked: true,
          suppressed: false,
        }),
      );
    },
  ),
];
const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
