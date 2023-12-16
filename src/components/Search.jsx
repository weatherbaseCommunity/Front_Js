import React from "react";
import styled from "styled-components";

const SearchLayout = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  /* border: gray 1px; */
  width: 330px;
  height: 40px;
  input {
    border: 0;
    width: 100%;
    height: 100%;
    padding: 10px 20px;
    background: white;
    border-radius: 3px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
    transition: all 0.4s ease;
  }
`

export default function Search() {
  const focusSearch = () => {

  }
  return (
    <SearchLayout>
      <input type="search" placeholder="검색..." />
    </SearchLayout>
  )
}