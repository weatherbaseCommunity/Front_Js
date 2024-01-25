import { useEffect, useState } from "react";

const isTokenValid = (accessToken, refreshToken) => {
  if (accessToken && refreshToken) {
    return true;
  } else {
    return false;
  }
}

export default function useAuth() {
  const [isSignIn, setIsSignIn] = useState();

  useEffect(() => {
    const accessToken = window.sessionStorage.getItem("ACCESS_TOKEN");
    const refreshToken = window.sessionStorage.getItem("REFRESH_TOKEN");

    const isValid = isTokenValid(accessToken, refreshToken);
    setIsSignIn(isValid);
  }, [])
  
  return {
    isSignIn,
  }
}


