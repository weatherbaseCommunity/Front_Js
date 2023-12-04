import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

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
      color: lightskyblue;
      cursor: pointer;
    }
  }
`


export default function Header() {
  const navigate = useNavigate();
  function movePage(path) {
    navigate(path);
  }
  return (
    <HeaderLayout>
      <LogoWrapper>
        <span onClick={()=>movePage('/')}>DOV</span>
      </LogoWrapper>
      <LoginWrapper>
        <div onClick={()=>movePage('/login')}>Login</div>
      </LoginWrapper>
    </HeaderLayout>
  )
}