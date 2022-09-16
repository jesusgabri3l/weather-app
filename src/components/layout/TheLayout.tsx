import { Outlet } from 'react-router-dom';

import ProfileButton from './profileButton/ProfileButton';

function TheLayout() {
  return (
    <div className="min-h-screen p-12">
      <ProfileButton />
      <Outlet />
    </div>
  );
}

export default TheLayout;
