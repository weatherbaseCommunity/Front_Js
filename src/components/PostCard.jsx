import React from "react";
import styled from "styled-components";

const PostCardLayout = styled.div`
  margin: 1rem;
  width: 20rem;
  border-radius: 4px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
  overflow: hidden;
  display: flex;
  flex-direction: column;
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
    margin: 0 0 1.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export default function PostCard() {
  return (
    <PostCardLayout>
      <img src="https://files.grafolio.ogq.me/real/587fbb53ec092/IMAGE/616249a3-c708-4563-8bd3-6134eaaa040b.jpg" alt="TitleImg" />
      <PostCardContent>
        <h4>여우 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci modi tempora magnam, earum esse quidem pariatur nihil obcaecati voluptate odit quos quae reprehenderit voluptates dolores. Perferendis ullam eos aperiam perspiciatis.</h4>
        <p>컨텐츠 요약임 여우가 어쩌구 저쩌구 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cumque assumenda dolor dicta pariatur quibusdam, beatae fugit ratione iste. Reiciendis sapiente qui quis, dolor cum voluptatibus architecto repudiandae voluptate recusandae!</p>
        <div>tag</div>
        <div>작성 날짜 및 댓글 날씨</div>
      </PostCardContent>
        <div>작성자 및 추천 수</div>
    </PostCardLayout>
  )
}