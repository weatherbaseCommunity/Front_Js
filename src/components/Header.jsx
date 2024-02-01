import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import useAuth from "../services/auth/useAuth";
import useSignOut from "../services/auth/useSignOut";
import useUserInfo from "../services/user/useUserInfo";

const HeaderLayout = styled.div`
  width: 100%;
  height: 70px;
  background: lightgray;
  opacity: 0.4;
  position: absolute;
  transition: 0.5s;
  display: flex;
  justify-content: space-between;
  &:hover {
    opacity: 0.7;
  }
`
const LogoWrapper = styled.div`
  margin: auto 0;
  margin-left: 50px;
  span {
    font-size: 26px;
    opacity: 1;
    cursor: pointer;
  }
`
const LoginWrapper = styled.div`
  display: flex;
  div {
    margin: auto 0;
    margin-right: 50px;
    &:hover {
      color: white;
      cursor: pointer;
    }
  }
  span {
    margin: auto 0;
    margin-right: 50px;
  }
`

export default function Header() {
  const navigate = useNavigate();
  // 로그인 상태 검증 커스텀 훅
  const {isSignIn} = useAuth();
  const [isLogin, setIsLogin] = useState();

  useEffect(() => {
    setIsLogin(isSignIn);
  }, [isSignIn]);
  // 로그아웃 하는 함수를 가진 커스텀 훅
  const {signOut} = useSignOut();
  return (
    <HeaderLayout>
      <LogoWrapper>
        <span onClick={()=>navigate('/')}>DOV</span>
      </LogoWrapper>
      <LoginWrapper>
        { isLogin === true ? 
          <>
            <div onClick={()=>navigate('/mypage')}>My Page</div>
            <div onClick={()=>signOut()}>Log Out</div>
          </> : 
          <>
            <div onClick={()=>navigate('/signIn')}>SignIn</div>
            <div onClick={()=>navigate('/signUp')}>SignUp</div>
          </>
        }
      </LoginWrapper>
    </HeaderLayout>
  )
}