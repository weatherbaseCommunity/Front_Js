import axios from "axios";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ServerAxios() {
  const navigate = useNavigate();
  const customAxios = Axios.create({
    baseURL: `http://localhost:8080`,
    timeout: 1000,
  });
  
  // request interceptor
  // 서버에 요청 보내기 전 토큰이 있다면 헤더에 포함시켜 요청한다.
  customAxios.interceptors.request.use(
    (config) => {
      const accessToken = window.sessionStorage.getItem('ACCESS_TOKEN');
      const refreshToken = window.sessionStorage.getItem('REFRESH_TOKEN');
      if(accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
        config.headers["Refresh-Token"] = `Bearer ${refreshToken}`;
        return config;
      }
    },
    (error) => {
      console.log("axios request interceptor 오류 발생");
      if (error.response && error.response.status === 401) {
        // 401 에러 처리
      } else if (error.response && error.response.status === 404) {
        // 404 에러 처리
      } else if (error.response && error.response.status === 500) {
        // 500 에러 처리
      } else {
        // 기타 에러 처리
      }
      return Promise.reject(error);
    }
  )
  
  // response interceptor
  // 서버로 부터 받은 응답에 ACCESS_TOKEN이 있는 경우 토큰을 교체한다.
  customAxios.interceptors.response.use(
    (response) => {
      if(response.headers["Authorization"]) {
        window.sessionStorage.removeItem("ACCESS_TOKEN");
        window.sessionStorage.setItem("ACCESS_TOKEN", response.headers["Authorization"]);
        // 토큰 만료시 모든 토큰을 삭제하고 메인으로 돌아간다.
      } else if(response.data.error === "INVALID_TOKEN") {
        window.sessionStorage.removeItem("ACCESS_TOKEN");
        window.sessionStorage.removeItem("REFRESH_TOKEN");
        // 다시 로그인 하라고 해야함
      }
      return response;
    },
    (error) => {
      console.log("axios response interceptor 오류 발생");
      if (error.response && error.response.status === 401) {
        // 401 에러 처리
      } else if (error.response && error.response.status === 404) {
        // 404 에러 처리
      } else if (error.response && error.response.status === 500) {
        // 500 에러 처리
      } else {
        // 기타 에러 처리
      }
      return Promise.reject(error);
    }
  )

  return {customAxios};
}

