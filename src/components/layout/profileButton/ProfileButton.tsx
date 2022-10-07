import { useState } from 'react';
import { useSelector } from 'react-redux';

import ProfileButtonDropdown from './ProfileButtonDropdown';
function ProfileButton() {
  const user = useSelector((state: any) => state.user.userInfo);
  const [active, setActive] = useState<boolean>(false);
  return (
    <div className="profile" data-testid="profile-test">
      <button
        className="profile__button"
        onClick={() => setActive(!active)}
        data-testid="profile-button-test"
      >
        <img src={user.imageUrl} className="profile__img" alt="Profile" />
      </button>
      <ProfileButtonDropdown active={active} closeDropdwon={() => setActive(false)} />
    </div>
  );
}

export default ProfileButton;
