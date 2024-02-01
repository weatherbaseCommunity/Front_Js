import React, { useEffect, useState } from "react"
import '../../style/sideBarItem.scss'
import searchPosting from "../../apis/api/searchPosting"
import { useNavigate } from "react-router-dom";

export default function SideBarItem({title, tag}) {
  const [recommendPosting, setRecommendPosting] = useState();
  const navigate = useNavigate();

  const handleItemClick = (data) => {
    navigate(`/postingdetail/${data.id}`);
    window.location.reload();
  }
  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }
  useEffect(() => {
    if (tag) {
      if (tag.length > 1) {
        searchPosting('hashTag', tag[getRandom(0, tag.length)]).then((result) => {
        setRecommendPosting(result);
        })
      } else {
        searchPosting('hashTag', tag && tag[0]).then((result) => {
        setRecommendPosting(result);
        })
      }
    }
  }, [tag]);
  return (
    <div className="sidebar_item">
      <div className="item_title">
        <p>{title}</p>
      </div>
      <div className="item_list">
        {recommendPosting && recommendPosting.map((data, index) => (
          <span key={index} onClick={()=> handleItemClick(data)}>{`${data.title}`}</span>
        ))}
      </div>
    </div>
  )
}