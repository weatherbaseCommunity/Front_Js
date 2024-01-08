import { useEffect, useState } from "react";

export default function UserAuth() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const ACCESS_TOKEN = window.sessionStorage.getItem("ACCESS_TOKEN");
    const REFRESH_TOKEN = window.sessionStorage.getItem("REFRESH_TOKEN");

    if (ACCESS_TOKEN && REFRESH_TOKEN) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);
  return {
    isLogin,
    setIsLogin,
  }
}