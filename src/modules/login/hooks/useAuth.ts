import { gapi } from 'gapi-script';
import { useState } from 'react';
import { useGoogleLogin, useGoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux';

import { setUserInfo } from '../../../store/user/userSlice';
import { refreshTokenSetup } from '../utils';

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
// FOR LOADING THE OAUTH CLIENT
gapi.load('client:auth2', () => {
  gapi.client.init({
    clientId,
    plugin_name: 'Weather app',
    scopes: ['.../auth/userinfo.email', '.../auth/userinfo.profile'],
  });
});

// HOOK FOR AUTH IN TO THE APPLICATION
export const useAuthIn = () => {
  // VARIABLES FOR THE AUTH PROCESS
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  // METHODS FOR THE AUTH PROCESS
  const onSuccess = (res: any) => {
    dispatch(setUserInfo(res.profileObj));
    refreshTokenSetup(res);
    setLoading(false);
  };
  const onAutoLoadFinished = () => setLoading(false);
  const onRequest = () => setLoading(true);
  // SIGN IN AUTH MAIN METHOD
  const { signIn } = useGoogleLogin({
    onSuccess,
    onAutoLoadFinished,
    onRequest,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
  });

  return { signIn, loading };
};
export const useAuthOut = () => {
  const onSuccess = () => {
    window.location.reload();
  };
  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess: onSuccess,
  });
  return signOut;
};
