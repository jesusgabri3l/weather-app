import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';

import HomeView from '../../modules/home/HomeView';
import locationReducer, { addLocation } from '../../store/location/locationSlice';
import { setupStore } from '../../store/store';
import { setUserInfo } from '../../store/user/userSlice';
import { BarranquillaLocation } from '../mocks/locations';
import { user } from '../mocks/user';
import { renderWithProviders } from '../utils/renderWithRedux';

beforeEach((context) => {
  if (context.meta.name != 'Should validate a valid location on the array') {
    const store = setupStore();
    store.dispatch(setUserInfo(user));
    renderWithProviders(<HomeView />, { store });
  }
});

describe('HomeView Validation', () => {
  it('Should validate main components in the HomeView', () => {
    const HomeViewWrapper = screen.getByTestId('homeview-wrapper');

    expect(HomeViewWrapper).toBeInTheDocument();
    expect(screen.getByTestId('google-input')).toBeInTheDocument();
    expect(screen.getByTestId('title-wrapper-test')).toBeInTheDocument();
    expect(screen.getByTestId('title-test')).toBeInTheDocument();
    expect(screen.getByTestId('title-test')).toHaveTextContent('Your selected locations');
  });

  it('Should return 0 items from locations array', () => {
    const initState = { yourLocations: [] };
    let initalLocationState = locationReducer(initState, { type: '' });
    expect(initalLocationState.yourLocations.length).toBe(0);
    expect(
      screen.getByText('Looks like you do not have any favourite location yet'),
    ).toBeInTheDocument();
  });

  it('Should validate a valid location on the array', async () => {
    const store = setupStore();
    store.dispatch(setUserInfo(user));
    store.dispatch(addLocation(BarranquillaLocation));

    renderWithProviders(
      <MemoryRouter>
        <HomeView />
      </MemoryRouter>,
      { store },
    );
    expect(store.getState().location.yourLocations).toHaveLength(1);
    expect(screen.getByTestId('slider-item-0')).toBeInTheDocument();
    expect(screen.getByTestId('loading-test')).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByTestId('loading-test'));
    expect(await screen.findByTestId('main-weather-test')).toHaveTextContent('Clouds');
    expect(await screen.findByTestId('location-weather-test')).toHaveTextContent(
      'Barranquilla',
    );
    expect(await screen.findByText('27.76 ° c')).toBeInTheDocument();
    expect(await screen.findByText('31.23 ° c')).toBeInTheDocument();
  });
});
