import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";

// 스타일
import "../style/postingDetail.scss"

// 컴포넌트
import Header from "../components/Header";
import PostingCommentItem from "./postingDetails/PostingCommentItem";
import LikeUp from "./postingDetails/LikeUp";
import SideBarItem from "./postingDetails/SideBarItem";
import ReplyCommentForm from "./postingDetails/ReplyCommentForm";

// api
import getPostingById from "../apis/api/getPostingById";

export default function PostingDetail() {
  const {id} = useParams();
  const [postingData, setPostingData] = useState();
  const updateData = (data) => {
    setPostingData(data);
  }
  useEffect(() => {
    getPostingById(id).then((result) => {
      setPostingData(result);
    })
  }, [])

  const timeZone = ["Morning", "Afternoon", "Night", "Dawn"];
  let createdDate = (postingData && postingData.createdTime || '').split('T', 2);
  createdDate[1] = (createdDate[1] || '').slice(0, 8);


  if (!postingData) {
    return (
      <div>Loading...</div>
    )
  } else {

    return (
      <div className="postingDetail_root_container" style={{backgroundImage:postingData.gradation}}>
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
                      {` ${postingData.nickname}`}
                    </span>
                  </div>
                  <div className="posting_info_description">
                    <div>{`${postingData.season} · ${timeZone[postingData.timeZone]} · ${postingData.weather}`}</div>
                    <div className="posting_tag_wrap">
                      {postingData.hashTag.map((tag, index) => (
                        <div className="posting_tag_elements" key={index}>{tag}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="postingDetail_posting_wrapper">
                <div className="posting_head">
                  <div className="posting_head_title">
                    {postingData.title}
                    <div className="posting_head_title_right">
                      <time>{`${createdDate[0]} ${createdDate[1]}`}</time>
                    </div>
                  </div>
                </div>
                <div className="posting_body">
                  <div className="posting_body_content">
                    {postingData.content}
                  </div>
                </div>
                <div className="posting_like_area">
                  <LikeUp likeCount={postingData.likeCnt} id={id} updateData={updateData}></LikeUp>
                </div>
                <div className="posting_comment">
                  <div className="posting_comment_title">
                    <span> 댓글</span>
                  </div>
                  <div className="posting_comment_list_area">
                    <div className="posting_comment_wrapper">
                      {postingData.commentList.map((data, index) => (
                        <PostingCommentItem commentData={data} key={index}></PostingCommentItem>
                      ))}
                    </div>
                  </div>
                  <ReplyCommentForm id={id} updateData={updateData}></ReplyCommentForm>
                </div>
              </div>
            </div>
          </article>
          <aside className="postingDetail_sidebar_right">
            <SideBarItem title={'추천 게시글'} tag={postingData.hashTag}></SideBarItem>
          </aside>
        </div>
      </div>
    )
  }
}