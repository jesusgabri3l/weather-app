export const refreshTokenSetup = (res: any) => {
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
  const refreshToken = async (): Promise<void> => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    setTimeout(refreshToken, refreshTiming);
  };
  setTimeout(refreshToken, refreshTiming);
};
