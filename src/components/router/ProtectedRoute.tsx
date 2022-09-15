import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

interface Props {
  children: ReactElement;
}
const ProtectedRoute = ({ children }: Props): ReactElement => {
  const user = useSelector((state: any) => state.user.userInfo);
  const location = useLocation();
  // eslint-disable-next-line no-prototype-builtins
  if (!user.googleId) return <Navigate to="/" state={{ from: location }} replace />;
  return children;
};

export default ProtectedRoute;
