import { gapi } from 'gapi-script';
import { useState } from 'react';
import { useGoogleLogin, useGoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux';

import { setUserInfo } from '../../../store/user/userSlice';
import { refreshTokenSetup } from '../utils';
import { useRedirection } from './useRedirection';

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
  const { redirect } = useRedirection();

  // METHODS FOR THE AUTH PROCESS
  const onSuccess = (res: any) => {
    dispatch(setUserInfo(res.profileObj));
    refreshTokenSetup(res);
    setLoading(false);
    redirect();
  };
  const onAutoLoadFinished = () => setLoading(false);
  const onRequest = () => setLoading(true);
  const onFailure = () => setLoading(false);
  // SIGN IN AUTH MAIN METHOD
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    onAutoLoadFinished,
    onRequest,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
  });

  return { signIn, loading };
};
// HOOK FOR LOGOUT
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
