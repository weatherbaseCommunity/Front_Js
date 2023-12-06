import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import './home.scss';
import Loading from "../components/Loading";


import MainClock from "../components/MainClock";

const HomeLayout = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient( 110deg, #FFBDC3, #83B3CC);
`
const arrowAnimation = keyframes`
  0% {
    bottom: 130px;
  } 50% {
    bottom: 100px;
  } 100% {
    bottom: 130px;
  }
`
const HomeLayout_Arrow = styled.div`
  position: absolute;
  text-align: center;
  bottom: 100px;
  left: 50%;
  animation: ${arrowAnimation} 2s ease infinite;
  &:hover {
    cursor: pointer;
  }
`



export default function Home() {
  let [backgroundTemp, setbgTemp] = useState('#ADC8D9');
  const [isLoading, setLoading] = useState(false);

  const scollRef = useRef();
  const arrowClick = () => {
    scollRef.current.scrollIntoView({behavior: "smooth"});
  }

  if (isLoading) {
    return (
    <Loading></Loading>
  )
}
  return (
    <div>
      <HomeLayout color={backgroundTemp}>
        <div className="homeLayout_mainClock">
          <MainClock></MainClock>
        </div>
        <HomeLayout_Arrow onClick={arrowClick}>화살표</HomeLayout_Arrow>
      </HomeLayout>
      <div style={{height:'300vh'}} ref={scollRef}></div>
      
    </div>
    
  )
}