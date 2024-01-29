import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PostCardLayout = styled.div`
  background-color: white;
  margin: 1rem;
  width: 20rem;
  border-radius: 4px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
`
const PostCardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  h4 {
    font-size: 1rem;
    margin: 0 0 0.25rem;
    line-height: 1.5;
    color: #212529;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    height: 3.9375rem;
    margin: 0 0 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
const TagBox = styled.div`
  overflow: hidden;
  height: 1.4rem;
  margin-bottom: 1rem;
  div {
    padding: 0px 7px 0px 7px;
    margin-left: 5px;
    max-width: 200px;
    border-radius: 2px;
    font-size: 15px;
    line-height: 18px;
    display: inline-block;
    outline: 1px solid black;
    color: black;
  }
`
const PostCardSubInfo = styled.div`
  font-size: .75rem;
  line-height: 1.5;
  color: #868e96;
`
const PostCardFooter = styled.div`
  padding: 0.625rem 1rem;
  border-top: 1px solid #f1f3f5;
  display: flex;
  font-size: 0.75rem;
  line-height: 1.5;
  justify-content: space-between;
`
const PostCardUserInfo = styled.div`
  display: flex;
  align-items: center;
  img {
    object-fit: cover;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
  span {
    color: #868e96;
    b {
      color: #212529;
    }
  }
`
const PostCardLikes = styled.div`
  display: flex;
  align-items: center;
  color: #212529;
  svg {
    width: 0.75rem;
    height: 0.75rem;
    margin-right: 0.5rem;
  }
`


export default function PostCard(props) {
  const {cardData} = props;
  let createdDate = cardData && cardData.createdTime.split('-', 3);
  createdDate[2] = createdDate && createdDate[2].substr(0,2);
  const timeZone = ["morning", "afternoon", "night", "dawn"];
  console.log();

  const navigate = useNavigate();
  const postCardClickHandler = () => {
    navigate(`/postingdetail/${cardData.id}`)
  }

  return (
    <PostCardLayout color={cardData.gradation} onClick={()=>{postCardClickHandler()}}>
      <div style={{backgroundImage:`${cardData.gradation}`, width: "320px", height:"167px"}}></div>
      <PostCardContent>
        <h4>{cardData && cardData.title}</h4>
        <p>{cardData && cardData.content}</p>
        <TagBox>
          {cardData.hashTag.map((tag, index)=>(
            <div key={index}>{tag}</div>
          ))}
        </TagBox>
        <PostCardSubInfo>
          <span>{`${createdDate[0]}년 ${createdDate[1]}월 ${createdDate[2]}일 · `}</span>
          <span>{`${cardData.weather} · `}</span>
          <span>{`${timeZone[cardData.timeZone]} · `}</span>
          <span>{`${cardData.commentList.length}개의 댓글`}</span>
        </PostCardSubInfo>
      </PostCardContent>
      <PostCardFooter>
        <PostCardUserInfo>
          <img src="https://velog.io/images/user-thumbnail.png"/>
          <span>by
            <b>{` ${cardData.nickname}`}</b>
          </span>
        </PostCardUserInfo>
        <PostCardLikes>
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
          </svg>
          {`${cardData.likeCnt}`}
        </PostCardLikes>
      </PostCardFooter>
    </PostCardLayout>
  )
}