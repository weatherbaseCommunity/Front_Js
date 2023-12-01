import React from "react";
import styled from "styled-components";

const TestPageStyle = styled.div`
  background: black;
  width: 5rem;
  height: 5rem;
  color: white;
`

export default function TestPage(){
  return (
    <TestPageStyle>This is TestPage</TestPageStyle>
  )
}