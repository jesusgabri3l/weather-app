import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAuthIn } from './hooks/useAuth';
import { useRedirection } from './hooks/useRedirection';

function LoginView() {
  const { signIn, loading } = useAuthIn();
  const { redirection } = useRedirection();
  const user = useSelector((state: any) => state.user.userInfo);

  useEffect(() => {
    if (user.value.googleId) redirection();
  }, [user.value.googleId]);
  return (
    <div>
      {loading ? <p>Loading...</p> : <button onClick={signIn}>Login with google</button>}
    </div>
  );
}
export default LoginView;
