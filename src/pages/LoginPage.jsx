import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";

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

export default function LoginPage() {
  const accessUserData = useSelector((state) => {return state.userAccessInfo})
  const dispatch = useDispatch();

  const navigate = useNavigate();
  function movePage(path) {
    navigate(path);
  }
  return (
    <div style={{height: "100vh", backgroundImage: accessUserData.gradation}}>
      <Header></Header>
      <ContentWrap>
        <h1>로그인</h1>
        <ul>
          <li>
            <LoginButton 
              background={'#8a8c9b'} 
              bgImage={'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg'}>
              <span>구글로 로그인</span>  
            </LoginButton>
          </li>
          <li>
            <LoginButton 
              background={'#2DB400'} 
              bgImage={'../../image/naverIcon.svg'}>
              <span>네이버로 로그인</span>
              {/* <div style={{height: "20px", width: "20px"}}>
                <svg viewBox="-51.2 -51.2 614.40 614.40" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="5.12"><path fill="#ffffff" d="M9 32V480H181.366V255.862L331.358 480H504V32H331.358V255.862L181.366 32H9Z"></path></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M9 32V480H181.366V255.862L331.358 480H504V32H331.358V255.862L181.366 32H9Z"></path></g></svg>
              </div>   */}
            </LoginButton>
          </li>
        </ul>
        <p>
          {`처음이신가요? `}
          <span onClick={() => movePage('/signUp')}>회원가입</span>
        </p>
      </ContentWrap>
    </div>
  )
}