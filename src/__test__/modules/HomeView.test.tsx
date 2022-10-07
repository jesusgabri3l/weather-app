import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';

import HomeView from '../../modules/home/HomeView';
import locationReducer, { addLocation } from '../../store/location/locationSlice';
import { setupStore } from '../../store/store';
import { setUserInfo } from '../../store/user/userSlice';
import { BarranquillaLocation } from '../mocks/locations';
import { renderWithProviders } from '../utils/renderWithRedux';

beforeEach(() => {
  const store = setupStore();
  store.dispatch(
    setUserInfo({
      googleId: '12345678',
      imageUrl:
        'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
    }),
  );
  renderWithProviders(<HomeView />, { store });
});

describe('HomeView DOM Validation', () => {
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
});
