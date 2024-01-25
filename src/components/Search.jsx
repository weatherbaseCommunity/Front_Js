import React from "react";
import '../style/search.scss';


export default function Search() {

  return (
    <div className="search_area">
      <select className="search_select_type">
        <option value="title">제목</option>
        <option value="content">내용</option>
        <option value="tag">태그</option>
      </select>
      <input className="search_input" type="text" />
      <button className="search_button">검색</button>
    </div>
  )
}