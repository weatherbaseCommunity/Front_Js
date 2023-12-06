import React from "react";
import styled from "styled-components";

const LoadingLayout = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(skyblue, white);
  text-align: center;
  img {
    padding-top: 150px;
    width: 30%;
    height: 30%;
  }
`

export default function Loading() {
  return (
    <LoadingLayout>
      <div>
        <img src={`${process.env.PUBLIC_URL}/image/loadingImage.gif`} alt="" />
      </div>
    </LoadingLayout>
  )
}