import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";



const HomeLayout = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient( 110deg, #012840 20%, #F29C6B, #F2766B);
`


export default function Home() {
  let [backgroundTemp, setbgTemp] = useState('#ADC8D9');
  let [userData, setUserData] = useState();

  useEffect(()=>{
    axios.get('https://geolocation-db.com/json/')
    .then((res) => [
      setUserData(res.data),
      console.log(userData)
    ])
  },[])

  return (
    <HomeLayout color={backgroundTemp}>
      <div>현재시간 : {new Date().toLocaleTimeString()}</div>
      <div>ip : {userData.city}</div>
    </HomeLayout>
  )
}