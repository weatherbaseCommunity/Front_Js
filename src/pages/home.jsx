import React, { useState } from "react";
import styled from "styled-components";



const HomeLayout = styled.div`
  width: 100%;
  height: 100vh;
  background: ${props => props.color || 'skyblue'};
`


export default function Home() {

  let [backgroundTemp, setbgTemp] = useState('gray');
  return (
    <HomeLayout color={backgroundTemp}>
    </HomeLayout>
  )
}