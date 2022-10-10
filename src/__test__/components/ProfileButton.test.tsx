import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';

import ProfileButton from '../../components/layout/profileButton/ProfileButton';
import { setupStore } from '../../store/store';
import { setUserInfo } from '../../store/user/userSlice';
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
  renderWithProviders(<ProfileButton />, { store });
});

describe('ProfileButton DOM Validation', () => {
  it('Should validate profile main components : Button and Dropdown', () => {
    const profileButtonWrapper = screen.getByTestId('profile-test');

    expect(profileButtonWrapper).toBeInTheDocument();
    expect(profileButtonWrapper.children.length).toBe(2);
    //Validating button
    expect(screen.getByAltText('Profile')).toBeInTheDocument();
    expect(screen.getByAltText('Profile')).toHaveAttribute(
      'src',
      'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
    );
    //Validating drodpwn
    expect(screen.getByTestId('profile-dropdown-test')).toBeInTheDocument();
    expect(screen.getByTestId('profile-dropdown-test')).not.toHaveClass('active');
  });

  it('Should validate button click and an active dropdown', async () => {
    const button = screen.getByTestId('profile-button-test');
    await userEvent.click(button);
    expect(screen.getByTestId('profile-dropdown-test')).toHaveClass('active');
  });
});
