import { useLocation, useNavigate } from 'react-router-dom';

export const useRedirection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // GET THE ROUTE FROM WHERE THE USER INITIALLY ENTERS, IF DOESNT EXIST GO HOME
  const from = location.state?.from?.pathname || 'home';
  const redirect = () => navigate(from, { replace: true });

  return { redirect };
};
