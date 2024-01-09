const userAuth = () =>  {
  let isLogin = false;
  
  const ACCESS_TOKEN = window.sessionStorage.getItem("ACCESS_TOKEN");
  const REFRESH_TOKEN = window.sessionStorage.getItem("REFRESH_TOKEN");
  
  if (ACCESS_TOKEN && REFRESH_TOKEN) {
    isLogin = true;
  } else {
    isLogin = false;
  }
  return isLogin
}

const userLogout = () => {
  window.sessionStorage.removeItem("ACCESS_TOKEN");
  window.sessionStorage.removeItem("REFRESH_TOKEN");
  window.location.reload();
}

export { userAuth, userLogout }

