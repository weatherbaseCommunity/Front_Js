
export function Login(apiKey, redirectURL, socialType) {
  const REST_API_KEY = apiKey;
  const REDIRECT_URL = redirectURL;
  let RequestURL = ``;

  if (socialType == 'google') {
    console.log("google")
    RequestURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`;
  } else if (socialType = 'kakao') {
    console.log("kakao")
    RequestURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;
  } else if (socialType = 'naver') {
    RequestURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&state=weatherBoard`;
  } else {
    console.log("naver")
    console.log("인자 오류")
  }
  window.location.href = RequestURL;
}