import React, { useState } from "react";
import '../style/search.scss';
import searchPosting from "../apis/api/searchPosting";


export default function Search(props) {
  const { setSearchData } = props;

  const [selected, setSelected] = useState('title');
  const [inputed, setInputed] = useState();

  const handleSearchButton = () => {
    searchPosting(selected, inputed)
    .then((result) => {
      setSearchData(result);
    });
  }
  const handleSearchSelect = (e) => {
    setSelected(e.target.value);
  }
  const hadleSearchInput = (e) => {
    setInputed(e.target.value);
  }

  return (
    <div className="search_area">
      <select className="search_select_type" onChange={handleSearchSelect}>
        <option value="title">제목</option>
        <option value="content">내용</option>
        <option value="hashTag">태그</option>
      </select>
      <input className="search_input" type="text" onChange={hadleSearchInput}/>
      <button className="search_button" onClick={() => handleSearchButton()}>검색</button>
    </div>
  )
}