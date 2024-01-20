import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GoogleRedirect() {
  // 현재 URL에서 인증 코드 추출
  const code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();
  let ACCESS_TOKEN = '';
  let REFRESH_TOKEN = '';

  useEffect(() => {
    async function GoogleLogin() {
      const response = await axios.post(`http://localhost:8080/auth/login/oauth2/code/google`, {code})
      .then((result) => {
        console.log(result);
        return result;
      }).catch((result)=>{
        console.log('실패');
        console.log(result);
      })
      ACCESS_TOKEN = response.data['accessToken'];
      REFRESH_TOKEN = response.data['refreshToken'];

      window.sessionStorage.setItem("ACCESS_TOKEN", ACCESS_TOKEN);
      window.sessionStorage.setItem("REFRESH_TOKEN", REFRESH_TOKEN);
    }
    GoogleLogin();
    navigate('/', {replace: true}); // replace : true -> 뒤로가기 막기
  }, []);
  return ;
}