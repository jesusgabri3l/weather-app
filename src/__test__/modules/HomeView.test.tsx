import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import HomeView from '../../modules/home/HomeView';
import locationReducer, { addLocation } from '../../store/location/locationSlice';
import { setupStore } from '../../store/store';
import { BarranquillaLocation } from '../mocks/locations';
import { renderWithProviders } from '../utils/renderWithRedux';

beforeEach((context) => {
  if (context.task.name != 'Should validate a valid location on the array') {
    renderWithProviders(<HomeView />);
  }
});

describe('HomeView Validation', () => {
  it('Should validate main components in the HomeView', () => {
    const HomeViewWrapper = screen.getByTestId('homeview-wrapper');

    expect(HomeViewWrapper).toBeInTheDocument();
    expect(screen.getByTestId('location-search-input')).toBeInTheDocument();
    expect(screen.getByTestId('title-wrapper-test')).toBeInTheDocument();
    expect(screen.getByTestId('title-test')).toBeInTheDocument();
    expect(screen.getByTestId('title-test')).toHaveTextContent('Your selected locations');
  });

  it('Should return 0 items from locations array', () => {
    const initState = { yourLocations: [] };
    const initalLocationState = locationReducer(initState, { type: '' });
    expect(initalLocationState.yourLocations.length).toBe(0);
    expect(
      screen.getByText('Looks like you do not have any favourite location yet'),
    ).toBeInTheDocument();
  });

  it('Should validate a valid location on the array', async () => {
    const store = setupStore();
    store.dispatch(addLocation(BarranquillaLocation));

    renderWithProviders(<HomeView />, { store });

    expect(store.getState().location.yourLocations).toHaveLength(1);
    expect(screen.getByTestId('slider-item-0')).toBeInTheDocument();
    expect(screen.getByTestId('loading-test')).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByTestId('loading-test'));
    expect(await screen.findByTestId('main-weather-test')).toHaveTextContent('Overcast');
    expect(await screen.findByTestId('location-weather-test')).toHaveTextContent(
      'Barranquilla',
    );
    expect(await screen.findByText('27.76 ° c')).toBeInTheDocument();
    expect(await screen.findByText('31.23 ° c')).toBeInTheDocument();
  });
});
