import React, { useRef } from "react";
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
  img {
    width: 320px;
    height: 167px;
  }
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
const Gradient = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`

export default function PostCard() {

  return (
    <PostCardLayout>
      <Gradient style={{visibility:'hidden' ,backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0), rgb(103, 115, 137,0.4) 100%"}}></Gradient>
      <img src="https://files.grafolio.ogq.me/real/587fbb53ec092/IMAGE/616249a3-c708-4563-8bd3-6134eaaa040b.jpg" alt="TitleImg" />
      <PostCardContent>
        <h4>여우 사과 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci modi tempora magnam, earum esse quidem pariatur nihil obcaecati voluptate odit quos quae reprehenderit voluptates dolores. Perferendis ullam eos aperiam perspiciatis.</h4>
        <p>컨텐츠 요약임 여우가 어쩌구 저쩌구 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cumque assumenda dolor dicta pariatur quibusdam, beatae fugit ratione iste. Reiciendis sapiente qui quis, dolor cum voluptatibus architecto repudiandae voluptate recusandae!</p>
        <TagBox>
          <div>여우</div>
          <div>커여움</div>
          <div>커여움</div>
        </TagBox>
        <PostCardSubInfo>
          <span>2023년 12월 12일 · </span>
          <span>Cloud · </span>
          <span>Afternoon · </span>
          <span>0개의 댓글</span>
        </PostCardSubInfo>
      </PostCardContent>
      <PostCardFooter>
        <PostCardUserInfo>
          <img src="https://velog.io/images/user-thumbnail.png"/>
          <span>by
            <b> joseggi</b>
          </span>
        </PostCardUserInfo>
        <PostCardLikes>
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
          </svg>
          {"10"}
        </PostCardLikes>
      </PostCardFooter>
    </PostCardLayout>
  )
}