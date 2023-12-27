import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { DateTime } from "luxon";
import { useDispatch, useSelector } from "react-redux";
import { setSeason, setTimezone } from "../redux/userAccessInfoSlice";


const ClockLayout = styled.div`
  font-size: 70px;
  position: relative;
`
const AnimationWrap = styled.div`
  position: absolute;
  height: 100%;
  width: 50%;
  left: 25%;
  background-image: url('../../image/snow.gif');
`

export default function MainClock() {
  const dispatch = useDispatch();

  // luxon 라이브러리를 통해 현재 시간을 가져오며 시간 형식을 정해준다.
  const [time, setTime] = useState(DateTime.now().toFormat('HH : mm : ss'));
  const accessTime = DateTime.now();
  // setInterval 함수를 통해 1초마다 해당 state를 변경하여 시간이 변경될 수 있게 해준다.
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(DateTime.now().toFormat('HH : mm : ss'));
    }, 1000);
    return (() => clearInterval(interval))
  }, []);
  // luxon 라이브러리를 통해 날짜를 받아와 저장해준다. 형식과 데이터의 형태를 지정할 수 있다.
  const [date, setDate] = useState(DateTime.now().setLocale('en-us').toLocaleString(DateTime.DATE_HUGE));

  const splitDate = date.split(" ");
  const seasonCheck = (data) => {
    if (data == "December" || data == "January" || data == "February") {
      return "Winter";
    }
    else if (data == "March" || data == "April" || data == "May") {
      return "Spring";
    }
    else if (data == "June" || data == "July" || data == "August") {
      return "Summer";
    }
    else if (data == "September" || data == "October" || data == "November") {
      return "Fall";
    }
  }
  const timezoneCheck = (data) => {
    if (data < 6) {
      return 3;
    }
    else if (data > 6 && data < 12) {
      return 0
    }
    else if (data > 12 && data < 18) {
      return 1
    }
    else {
      return 2
    }
  }
  
  useEffect(()=> {
    dispatch(setSeason(seasonCheck(splitDate[1])));
    dispatch(setTimezone(timezoneCheck(accessTime.hour)));
  }, []);

  return (
    <ClockLayout>
      <AnimationWrap className="12"></AnimationWrap>
      <div>
        {time}
      </div>
      <div style={{fontSize:'30px'}}>
        {date}
      </div>
      
    </ClockLayout>
  )
}
