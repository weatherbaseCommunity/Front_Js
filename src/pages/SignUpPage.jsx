import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";

const ContentWrap = styled.section`
  position: relative;
  max-width: 394px;
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
const SignUpButton = styled.div`
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

export default function SignUpPage() {
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
        <h1>회원가입</h1>
        <ul>
          <li>
            <SignUpButton 
              background={'#8a8c9b'} 
              bgImage={'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg'}>
              <span>구글로 회원가입</span>  
            </SignUpButton>
          </li>
          <li>
            <SignUpButton 
              background={'#2DB400'} 
              bgImage={'../../image/naverIcon.svg'}>
              <span>네이버로 회원가입</span>  
            </SignUpButton>
          </li>
        </ul>
        <p>
          {`이미 가입하셨나요? `}
          <span onClick={() => movePage('/login')}>로그인하기</span>
        </p>
      </ContentWrap>
    </div>
  )
}