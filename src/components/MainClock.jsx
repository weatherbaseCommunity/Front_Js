import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { DateTime } from "luxon";
import { useDispatch, useSelector } from "react-redux";

const ClockLayout = styled.div`
  font-size: 70px;
`

export default function MainClock() {
  // luxon 라이브러리를 통해 현재 시간을 가져오며 시간 형식을 정해준다.
  const [time, setTime] = useState(DateTime.now().toFormat('HH : mm : ss'));
  // setInterval 함수를 통해 1초마다 해당 state를 변경하여 시간이 변경될 수 있게 해준다.
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(DateTime.now().toFormat('HH : mm : ss'));
    }, 1000);
    return (() => clearInterval(interval))
  }, []);
  // luxon 라이브러리를 통해 날짜를 받아와 저장해준다. 형식과 데이터의 형태를 지정할 수 있다.
  const [date, setDate] = useState(DateTime.now().setLocale('en-us').toLocaleString(DateTime.DATE_HUGE));

  let [userData, setUserData] = useState();
  
  useEffect(()=>{
    const fetch = async () => {
      try {
        const response = await axios.get('https://geolocation-db.com/json/');
        return response.data;
      } catch (error) {
        console.log(error);
      }
    };
    fetch().then(response => {
      setUserData(response);
    });
  },[]);

  let [userWeatherData, setUserWeatherData] = useState();
  const getWeatherData = async () => {
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${userData.latitude}&lon=${userData.longitude}&appid=${process.env.REACT_APP_WEATHER_KEY}`)
    .then((res) => {
      console.log(res.data.weather[0].main);
      setUserWeatherData(res.data.weather[0].main);
    })
    .catch((error) => {
      console.log(error)
    })
  }


  return (
    <ClockLayout>
      <div>
        {time}
      </div>
      <div style={{fontSize:'30px'}}>
        {date}
      </div>
      <div></div>
      <button onClick={getWeatherData}>test</button>
      <div>{userWeatherData}</div>
    </ClockLayout>
  )
}
