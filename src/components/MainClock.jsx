import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { DateTime } from "luxon";

const ClockLayout = styled.div`
  /* text-align: center;
  padding-top: 150px; */
  font-size: 70px;
`

export default function MainClock() {
  const [time, setTime] = useState(DateTime.now().toFormat('HH : mm : ss'));
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(DateTime.now().toFormat('HH : mm : ss'));
    }, 1000);
    return (() => clearInterval(interval))
  }, []);
  const [date, setDate] = useState(DateTime.now().setLocale('en-us').toLocaleString(DateTime.DATE_HUGE));

  let [userData, setUserData] = useState();
  const getWeatherData = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${userData.latitude}&lon=${userData.longitude}&appid=${process.env.REACT_APP_WEATHER_KEY}`)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
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
      // getWeatherData();
    });
  },[]);

  useEffect(() => {
    if (userData) {
      getWeatherData();
    }
  },[])

  return (
    <ClockLayout>
      <div>
        {time}
      </div>
      <div style={{fontSize:'30px'}}>
        {date}
      </div>
      <div>
        {userData ? userData.country_name : ""}
      </div>
    </ClockLayout>
  )
}
