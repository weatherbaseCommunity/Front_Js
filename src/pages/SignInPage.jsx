import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import * as SocialLogin from "../components/SocialLogin";

const ContentWrap = styled.section`
  position: relative;
  max-width: 350px;
  padding: 0 30px;
  top: 200px;
  margin: 0 auto 40px;
  h1 {
    position: relative;
    margin: 0 -17px;
    text-align: center;
    font-size: 36px;
    font-weight: 300;
    color: #222;
  }
  ul {
    padding: 0;
    margin: 0;
    margin-top: 30px;
    list-style: none;
  }
  li {
    margin-top: 14px;
    display: list-item;
    box-sizing: border-box;
  }
  p {
    margin-top: 49px;
    color: #333;
    font-size: 14px;
    line-height: 1.57;
    text-align: center;
    span {
      font-weight: 700;
      color: #2b2b31;
      cursor: pointer;
    }
  }
`
const MiddleLine = styled.div`
  position: relative;
  display: block;
  margin: 20px 0 19px;
  color: #000;
  font-size: 13px;
  text-align: center;
  line-height: 16px;
  &::before {
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0%;
    left: 0;
    transform: translateZ(0);
    background: #000;
    content: '';
  }
`
const LoginButton = styled.div`
  background: ${props => props.background};
  color: #fff;
  display: table;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 54px;
  border-radius: 2px;
  border: 1px solid transparent;
  text-align: center;
  cursor: pointer;
  &:before {
    width: 30px;
    height: 30px;
    content: '';
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${props => props.bgImage});
    position: absolute;
    left: 15px;
    top: 20%;
  }
  span {
    display: table-cell;
    line-height: 20px;
    vertical-align: middle;
    border-radius: 3px;
    padding: 0 55px;
  }
`
const InputStyle = styled.input`
  width: 100%;
  height: 44px;
  padding-top: 3px;
  border: 1px solid #e5e8eb;
  background-color: #fff;
  font-size: 14px;
  font-weight: 500;
  outline: 0;
  transition: border-color .15s linear;
  &:focus {
    border: 2px solid #07f;
    padding-top: 2px;
    transition: border-color .15s linear;
  }
`

export default function SignInPage() {
  const accessUserData = useSelector((state) => {return state.userAccessInfo})
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  })

  const handleIDInput = (e) => {
    let temp = {...authData};
    temp.email = e.target.value;
    setAuthData(temp);
  }
  const handlePWInput = (e) => {
    let temp = {...authData};
    temp.password = e.target.value;
    setAuthData(temp);
  }

  const commonSignIn = () => {
    axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/signin`, {
      email: authData.email,
      password: authData.password
    }).then((result) => {
      window.sessionStorage.setItem("ACCESS_TOKEN", result.data.accessToken);
      window.sessionStorage.setItem("REFRESH_TOKEN", result.data.refreshToken);
      navigate('/')
    }).catch((error) => {
      console.log("실패");
      console.log(error);
    })
  }

  return (
    <div style={{height: "100vh", backgroundImage: accessUserData.gradation}}>
      <Header></Header>
      <ContentWrap>
        <h1>로그인</h1>
        <ul>
          <li>
            <form onSubmit={(e) => {e.preventDefault();}}>
              <div style={{height:'56px'}}>
                <InputStyle 
                  type="text"
                  placeholder="ID를 입력하세요"
                  onChange={handleIDInput}
                />
              </div>
              <div style={{height:'56px'}}>
                <InputStyle 
                  type="password"
                  placeholder="PW를 입력하세요"
                  onChange={handlePWInput}
                />
              </div>
            </form>
            <button onClick={commonSignIn}>로그인</button>
            <MiddleLine>
              <span>또는</span>
            </MiddleLine>
          </li>
          <li>
            <LoginButton 
              onClick={() => {SocialLogin.Login(process.env.REACT_APP_CLIENT_ID_GOOGLE, 'http://localhost:3000/authgoogle', 'google')}}
              background={'#8a8c9b'} 
              bgImage={'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg'}>
              <span>구글로 시작하기</span>  
            </LoginButton>
          </li>
          <li>
            <LoginButton 
              onClick={() => {window.location.href =  `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID_NAVER}&redirect_uri=http://localhost:3000/authnaver&state=weatherBoard`}}
              background={'#2DB400'} 
              bgImage={'../../image/naverIcon.svg'}>
              <span>네이버로 시작하기</span>
            </LoginButton>
          </li>
          <li>
            <LoginButton
              onClick={() => {SocialLogin.Login(process.env.REACT_APP_CLIENT_ID_KAKAO, 'http://localhost:3000/authkakao', 'kakao')}} 
              background={'#FEE500'} 
              bgImage={'../../image/kakaoIcon.svg'}>
              <span style={{color: "#191919"}}>카카오로 시작하기</span>
            </LoginButton>
          </li>
        </ul>
        <p>
          {`처음이신가요? `}
          <span onClick={() => navigate('/signUp')}>회원가입</span>
        </p>
      </ContentWrap>
    </div>
  )
}