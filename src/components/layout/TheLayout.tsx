import { Outlet } from 'react-router-dom';

import ProfileButton from './profileButton/ProfileButton';
// Layout component for the UI Building
// This might contains the navbar, footer, etc... as long as you provide the <Outlet> component
// Outlet component works as a "Router" itself.
// In this case we just need the ProfileButton which is the Dropdown component
function TheLayout() {
  return (
    <div className="min-h-screen p-12">
      <ProfileButton />
      <Outlet />
    </div>
  );
}

export default TheLayout;
