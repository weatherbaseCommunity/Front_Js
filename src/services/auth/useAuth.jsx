import { useEffect, useState } from "react";

export default function useAuth() {

  const [isSignIn, setIsSignIn] = useState(false);
  const ACCESS_TOKEN = window.sessionStorage.getItem("ACCESS_TOKEN");
  const REFRESH_TOKEN = window.sessionStorage.getItem("REFRESH_TOKEN");

  useEffect(() => {
    if (ACCESS_TOKEN && REFRESH_TOKEN) {
      setIsSignIn(true);
    } else {
      setIsSignIn(false);
    }
  },[])
  
  return {
    isSignIn
  }
}


