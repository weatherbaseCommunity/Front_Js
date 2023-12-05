import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { DateTime } from "luxon";

const ClockLayout = styled.div`
  text-align: center;
  padding-top: 150px;
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
  useEffect(()=>{
    axios.get('https://geolocation-db.com/json/')
    .then((result) => {
      setUserData(result.data)
      if (userData){
        console.log(userData)
      }
  })
    .catch((error) => {
      console.log(error)
    })
  },[]);

  return (
    <ClockLayout>
      <div>
        {time}
      </div>
      <div style={{fontSize:'30px'}}>
        {date}
      </div>
    </ClockLayout>
  )
}
