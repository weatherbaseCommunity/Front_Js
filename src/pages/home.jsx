import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import './home.scss';

import MainClock from "../components/MainClock";

const HomeLayout = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient( 110deg, #FFBDC3, #83B3CC);
`


export default function Home() {
  let [backgroundTemp, setbgTemp] = useState('#ADC8D9');
  
  return (
    <HomeLayout color={backgroundTemp}>
      <div className="homeLayout_mainClock">
        <MainClock></MainClock>
      </div>
    </HomeLayout>
  )
}