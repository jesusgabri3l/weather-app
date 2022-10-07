import { useAuthOut } from '../../../modules/login/hooks/useAuth';
function ProfileButtonDropdown({ active, closeDropdwon }: any) {
  // Hooks for the whole logout configuration
  const authOut = useAuthOut();
  return (
    <div
      className={`profile__dropdown rounded-lg ${active && 'active'}`}
      data-testid="profile-dropdown-test"
    >
      <ul className="profile__dropdown__list">
        <button className="profile__dropdown__list__item rounded-lg mb-2 w-full text-left">
          <i className="fa-solid fa-gears mr-2"></i>
          <span className="profile__dropdown__list__item__text">Settings</span>
        </button>
        <button
          className="profile__dropdown__list__item rounded-lg mt-2 w-full text-left"
          onClick={authOut}
        >
          <i className="fa-solid fa-right-from-bracket mr-2" />
          <span className="profile__dropdown__list__item__text">Logout</span>
        </button>
      </ul>
      <button className="profile__dropdown__close" onClick={() => closeDropdwon()}>
        <i className="fa fa-times" />
      </button>
    </div>
  );
}

export default ProfileButtonDropdown;
