import React, { useState, useRef } from "react";
import "../style/postingDetail.scss"

import Header from "../components/Header";
import { useParams } from "react-router-dom";
import useGetPostById from "../services/post/useGetPostById";
import { useSelector } from "react-redux";
import usePressLike from "../services/post/usePressLike";
import useReplyComment from "../services/post/useReplyComment";
import PostingCommentItem from "./PostingCommentItem";

export default function PostingDetail() {
  const {id} = useParams();
  const {postData, postLoading, error} = useGetPostById(id);
  const replyButtonRef = useRef();
  const replyTextRef = useRef();

  // console.log(postData);

  const {pressLike} = usePressLike();
  const {ReplyComment} = useReplyComment();

  
  
  const timeZone = ["Morning", "Afternoon", "Night", "Dawn"];
  let createdDate = (postData.createdTime||'').split('-', 3);
  createdDate[2] = (createdDate[2]||'').substr(0, 2);

  const likeButtonOnClick = () => {
    pressLike(id);
  }

  const replyTextButtonOnClick = () => {
    ReplyComment(replyTextRef.current.value, id);
  }

  if (postLoading === true) {
    return (
      <div>Loading...</div>
    )
  }
  
  return (
    <div className="postingDetail_root_container" style={{backgroundImage:postData.gradation}}>
      <Header></Header>
      <div className="postingDetail_content_wrapper">
        <article className="postingDetail_posintgArticle containe_fluid">
          <div className="postingDetail_article_view">
            <div className="postingDetail_posting_info">
              <div className="posting_info_left">
                <div className="posting_info_user_icon">
                  <img src="https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg" alt="" />
                </div>
              </div>
              <div className="posting_info_right">
                <div className="posting_info_head" style={{color: '#868e96'}}>
                  by
                  <span style={{color: '#212529', fontWeight: "bold"}}>
                    {` ${postData.nickname}`}
                  </span>
                </div>
                <div className="posting_info_description">
                  <div>{`${postData.weather} · ${postData.season} · ${timeZone[postData.timeZone]} · ${postData.country}`}</div>
                  <div>{`만든 날짜: ${createdDate[0]}년 ${createdDate[1]}월 ${createdDate[2]}일`}</div>
                </div>
              </div>
            </div>
            <div className="postingDetail_posting_wrapper">
              <div className="posting_head">
                <div className="posting_head_title">
                  {postData.title}
                </div>
              </div>
              <div className="posting_body">
                <div className="posting_body_content">
                  {postData.content}
                </div>
              </div>
              <div className="posting_like_area">
                <div className="like_up">
                  <button className="like_button" onClick={() => likeButtonOnClick()}>
                    {`좋아요! `}
                    <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                    <br/> 
                    {`(${postData.likeCnt})`}
                  </button>
                </div>
              </div>
              <div className="posting_comment">
                <div className="posting_comment_title">
                  <span> 댓글</span>
                </div>
                <div className="posting_comment_list_area">
                  <div className="posting_comment_wrapper">
                    {postData.commentList && postData.commentList.map((data, index) => (
                      <PostingCommentItem commentData={data}></PostingCommentItem>
                    ))}
                  </div>
                </div>
                <form className="posting_comment_form" onSubmit={(e) => {e.preventDefault();}}>
                  <div className="reply_form_container">
                    <div className="reply_form_info">
                      <div className="reply_user_info">
                        <span>댓글 작성</span>
                        <div className="reply_user_nickName">nickname</div>
                      </div>
                    </div>
                    <div className="reply_form_textarea_wrapper">
                      <textarea
                        className="reply_form_text"
                        ref={replyTextRef}
                        name="content" 
                        maxLength={8000} 
                        tabIndex={102}
                        placeholder="댓글을 입력하세요"
                      >
                      </textarea>
                      <div className="reply_form_submit_button_wrapper" ref={replyButtonRef}>
                        <button className="reply_form_submit_button" onClick={() => replyTextButtonOnClick()} type="submit" tabIndex={103}>작성</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </article>
        <aside className="postingDetail_sidebar_right">
          <div className="sidebar_item">
            <div className="item_title">
              <p>사이트바 아이템 제목</p>
            </div>
            <div className="item_list"></div>
          </div>
          <div className="sidebar_item"></div>
        </aside>
      </div>
    </div>
  )
}