import { useEffect } from "react";
import useAuth from "./useAuth";

export default function useSignOut() {
  const {isSignIn} = useAuth();

  const signOut = () => {
    if (isSignIn) {
      window.sessionStorage.removeItem("ACCESS_TOKEN");
      window.sessionStorage.removeItem("REFRESH_TOKEN");
      window.location.reload();
    }
  }
  return {
    signOut,
  }
}