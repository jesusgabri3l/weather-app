import logo from '../../assets/logo.svg';
import BaseLoader from '../../components/base/BaseLoader';
import { useAuthIn } from './hooks/useAuth';

function LoginView() {
  const { signIn, loading } = useAuthIn();

  return (
    <div className="h-screen flex-center p-4">
      {loading ? (
        <BaseLoader />
      ) : (
        <div className="h-4/5 w-full bg-element rounded-lg p-6 shadow-inner flex-center flex-col lg:h-3/5 lg:w-3/5">
          <div>
            <p className="text-primary font-bold text-2xl inline-block lg:text-5xl">
              Weather App
            </p>
            <img
              src={logo}
              alt="logo"
              width="50"
              height="50"
              className="inline-block ml-3"
            />
          </div>
          <p className="text-white mt-3 text-xl w-full text-center lg:w-4/5">
            Hey, Welcome back! if you wanna use the application just login with your{' '}
            <span className="text-primary font-bold">Google</span> account.
          </p>
          <button className="button button--primary mt-20" onClick={signIn}>
            Login with Google
          </button>
        </div>
      )}
    </div>
  );
}
export default LoginView;
