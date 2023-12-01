import React from "react";
import styled from "styled-components";



const HeaderLayout = styled.div`
  width: 100%;
  height: 70px;
  background: white;
  opacity: 0.4;
  position: absolute;
  transition: 0.5s;
  &:hover {
    opacity: 0.7;
  }
`


export default function Header() {
  return (
    <HeaderLayout></HeaderLayout>
  )
}