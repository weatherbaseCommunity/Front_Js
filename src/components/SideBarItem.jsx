import React from "react"
import '../style/sideBarItem.scss'

export default function SideBarItem({title}) {

  return (
    <div className="sidebar_item">
      <div className="item_title">
        <p>{title}</p>
      </div>
      <div className="item_list">
        <span>게시글 추천 지금 바로 ㄱㄱ</span>
        <span>게시글 추천 지금 바로 ㄱㄱ</span>
        <span>게시글 추천 지금 바로 ㄱㄱ</span>
        <span>게시글 추천 지금 바로 ㄱㄱ</span>
      </div>
    </div>
  )
}