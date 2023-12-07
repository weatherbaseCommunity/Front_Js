import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import './home.scss';
import Loading from "../components/Loading";

import MainClock from "../components/MainClock";
import { setWeather, updateInfo } from "../redux/userAccessInfoSlice";

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
  const userData = useSelector((state) => {return state.userAccessInfo})
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);

  const getlocationData = async () => {
    try {
      const response = await axios.get('https://geolocation-db.com/json/');
      dispatch(updateInfo(response.data));
    } catch (error) {
      console.log(error);
    }
  }
  const getWeatherData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${userData.latitude}&lon=${userData.longitude}&appid=${process.env.REACT_APP_WEATHER_KEY}`);
      dispatch(setWeather(response.data.weather[0].main));
    } catch (error) {
      console.log(error);
    }
  }

  const mainAPI = async () => {
    setLoading(true); 
    await getlocationData();
    await getWeatherData();
    setLoading(false);
  }

  useEffect(()=>{
    mainAPI();
  },[]);
  
  console.log(userData)


  let [backgroundTemp, setbgTemp] = useState('#ADC8D9');
  

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
        <div style={{textAlign: "center"}}>현재날씨 : {userData.weather}</div>
        <HomeLayout_Arrow onClick={arrowClick}>화살표</HomeLayout_Arrow>
      </HomeLayout>
      
      <div style={{height:'300vh'}} ref={scollRef}></div>
      
    </div>
    
  )
}