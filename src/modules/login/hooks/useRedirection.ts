import { useLocation, useNavigate } from 'react-router-dom';

export const useRedirection = () => {
  const location: any = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || 'home';
  const redirection = () => navigate(from, { replace: true });

  return { redirection };
};
