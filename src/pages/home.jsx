// 라이브러리
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";

// 컴포넌트
import './home.scss';
import Header from '../components/Header';
import Loading from "../components/Loading";
import MainClock from "../components/MainClock";
import PostCard from "../components/PostCard";
import Search from "../components/Search";

// redux action
import { setGradation, setWeather, updateInfo } from "../redux/userAccessInfoSlice";
import { useNavigate } from "react-router-dom";

// 기능함수
import { userAuth } from "../components/auth/userAuth"

const HomeLayout = styled.div`
  width: 100%;
  /* height: 100vh; */
  background-image: ${props => props.color};
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
  bottom: 100px;
  left: 50%;
  animation: ${arrowAnimation} 3s ease infinite;
  &:hover {
    cursor: pointer;
  }
`

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessUserData = useSelector((state) => {return state.userAccessInfo});
  const [isLoading, setLoading] = useState(false);
  const scollRef = useRef();

  // 위치 데이터 호출API
  const getlocationData = async () => {
    try {
      const response = await axios.get('https://geolocation-db.com/json/');
      dispatch(updateInfo(response.data));
    } catch (error) {
      console.log(error);
    }
  }
  // 위치 기반 날씨 데이터 호출API
  const getWeatherData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${accessUserData.latitude}&lon=${accessUserData.longitude}&appid=${process.env.REACT_APP_WEATHER_KEY}`);
      dispatch(setWeather(response.data.weather[0].main));
    } catch (error) {
      console.log(error);
    }
  }
  
  const setGradationData = () => {
    dispatch(setGradation(homeLayoutBackgroundData[accessUserData.season][accessUserData.timezone]))
  }

  const mainAPI = async () => {
    setLoading(true); 
    await getlocationData();
    await getWeatherData();
    setLoading(false);
  }
  
  const arrowClick = () => {
    scollRef.current.scrollIntoView({behavior: "smooth"});
  }
  
  const homeLayoutBackgroundData = {
    // 배열안의 순서는 오전 오후 밤 새벽
    Spring : [
      "linear-gradient(90deg, rgb(253, 255, 132) 0%, 26.083%, rgb(237, 232, 226) 52.1661%, 76.083%, rgb(241, 210, 218) 100%)",
      "linear-gradient(90deg, rgb(203, 228, 134) 0%, 26.2058%, rgb(221, 249, 252) 52.4116%, 85.5114%, rgb(255, 165, 172) 100%)",
      "linear-gradient(0deg, rgb(255, 210, 201) 0%, 25.6163%, rgb(58, 99, 143) 51.2326%, 75.6163%, rgb(36, 50, 95) 100%)",
      "linear-gradient(90deg, rgb(232, 220, 230) 0%, 27.5338%, rgb(232, 187, 145) 55.0676%, 77.5338%, rgb(121, 121, 69) 100%)"
    ],
    Summer : [
      "linear-gradient(30deg, rgb(37, 89, 162) 0%, 50%, rgb(231, 211, 158) 100%)",
      "linear-gradient(180deg, rgb(123, 177, 239) 0%, 14.1971%, rgb(249, 243, 195) 45.1233%, 80.1817%, rgb(171, 204, 115) 100%)",
      "linear-gradient(50deg, rgb(255, 153, 82) 0%, 18.2878%, rgb(65, 98, 107) 41.8006%, 64.5185%, rgb(127, 107, 106) 100%)",
      "linear-gradient(90deg, rgb(122, 144, 194) 0%, 29.1533%, rgb(240, 207, 190) 58.3065%, 79.1533%, rgb(249, 196, 180) 100%)"

    ],
    Fall : [
      "linear-gradient(180deg, rgb(254, 241, 235) 0%, 55.1983%, rgb(175, 93, 53) 100%)",
      "linear-gradient(90deg, rgb(180, 42, 29) 0%, 38.6924%, rgb(218, 152, 60) 100%)",
      "linear-gradient(0deg, rgb(218, 166, 83) 0%, 40.0857%, rgb(80, 2, 2) 80.1715%, 88.3173%, rgb(24, 3, 0) 96.463%)",
      "linear-gradient(-130deg, rgb(220, 190, 182) 0%, 39.3355%, rgb(121, 61, 33) 73.5263%, 87.2454%, rgb(33, 14, 10) 100%)"
    ],
    Winter : [
      "linear-gradient(90deg, rgb(198, 202, 211) 0%, 50.3751%, rgb(103, 115, 137) 100%)",
      "linear-gradient(90deg, rgb(178, 198, 233) 0%, 50%, rgb(132, 146, 159) 100%)",
      "linear-gradient(180deg, rgb(10, 43, 76) 0%, 25.5627%, rgb(99, 134, 166) 51.1254%, 75.5627%, rgb(124, 146, 167) 100%)",
      "linear-gradient(0deg, rgb(251, 249, 250) 0%, 21.3826%, rgb(163, 155, 212) 42.7653%, 64.869%, rgb(128, 130, 191) 100%)"
    ]
  }
  
  useEffect(()=>{
    mainAPI();
  },[]);

  useEffect(() => {
    setGradationData();
    console.log(accessUserData);
  },[accessUserData])

  if (isLoading) {
    return (
    <Loading></Loading>
  )
}
  return (
    <div className="homeContainer">
      <Header/>
      <HomeLayout color={homeLayoutBackgroundData[accessUserData.season][accessUserData.timezone]}>
        <div className="homeLayout_mainClock">
          <MainClock></MainClock>
        </div>
        <HomeLayout_Arrow onClick={()=>{arrowClick()}}>
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>
        </HomeLayout_Arrow>
        <div className="homeContentWrap" ref={scollRef}>
          <div className="homeTabWrap">
            <Search></Search>
            <button onClick={()=>{navigate('/writing')}}>글쓰기</button>
          </div>
          <div className="postCardBoardLayout">
            <div className="postCardBoardWrap">
              <div className="postCardBoard">
                <PostCard></PostCard>
                <PostCard></PostCard>
                <PostCard></PostCard>
                <PostCard></PostCard>
                <PostCard></PostCard>
              </div>
            </div>
          </div>
        </div>
      </HomeLayout>
    </div>
    
  )
}