import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

interface Props {
  children: ReactElement;
}
// Component used for protected routes
//This component validates wether the user is logged or not, in order to redirect or not!
function ProtectedRoute({ children }: Props) {
  const user = useSelector((state: any) => state.user.userInfo);
  const location = useLocation();
  if (!user.googleId) return <Navigate to="login" state={{ from: location }} replace />;
  return children;
}

export default ProtectedRoute;
