import React, { useState, useRef, useMemo } from "react";
import usePressLike from "../../services/post/usePressLike";
import '../../style/likeUp.scss'
import getPostingById from "../../apis/api/getPostingById";

export default function LikeUp(props) {
  const { likeCount, id, updateData } = props;
  const { pressLike } = usePressLike();

  const likeButtonOnClick = async () => {
    // 서버에 카운트 올려줌
    await pressLike(id);

    // 카운트가 올라간 바뀐데이터 새로 적용
    getPostingById(id).then((result) => {
      updateData(result);
    })
  }


  return (
    <div className="like_up">
      <button className="like_button" onClick={() => likeButtonOnClick()}>
        {`좋아요! `}
        <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
        </svg>
        <br/> 
        {`(${likeCount})`}
      </button>
    </div>
  )
}