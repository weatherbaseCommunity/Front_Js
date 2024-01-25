import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

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

export default function SignUpPage() {
  const accessUserData = useSelector((state) => {return state.userAccessInfo})
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
  })

  const IDSetHandler = (e) => {
    let temp = {...signUpData};
    temp.email = e.target.value;
    setSignUpData(temp);
  }
  const PWSetHandler = (e) => {
    let temp = {...signUpData};
    temp.password = e.target.value;
    setSignUpData(temp);
  }

  const commonSignUp = () => {
    axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/signup`, {
      email: signUpData.email,
      password: signUpData.password
    }).then((result) => {
      navigate('/signIn')
    }).catch((error) => {
      console.log("실패");
      console.log(error);
    })
  }

  return (
    <div style={{height: "100vh", backgroundImage: accessUserData.gradation}}>
      <Header></Header>
      <ContentWrap>
        <h1>회원가입</h1>
        <ul>
          <li>
          <form onSubmit={(e) => {e.preventDefault();}}>
              <div style={{height:'56px'}}>
                <InputStyle 
                  type="text"
                  placeholder="ID를 입력하세요"
                  onChange={IDSetHandler}
                />
              </div>
              <div style={{height:'56px'}}>
                <InputStyle 
                  type="password"
                  placeholder="PW를 입력하세요"
                  onChange={PWSetHandler}
                />
              </div>
            </form>
            <button onClick={commonSignUp}>회원가입</button>
          </li>
        </ul>
        <p>
          {`이미 가입하셨나요? `}
          <span onClick={() => navigate('/signin')}>로그인하기</span>
        </p>
      </ContentWrap>
    </div>
  )
}