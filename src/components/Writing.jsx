import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TagInput from "./TagInput";

import MarkDownEditor from "./MarkDownEditor";
import usePosting from "../services/post/usePosting";


import postPosting from "../apis/api/postPosting";

const WritingLayout = styled.div`
  width: 100%;
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
`
const TitleWrap = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 0.75rem;
  input {
    width: 99%;
    border: none;
    border-bottom: solid #aaaaaa 1px;
    padding-bottom: 10px;
    padding-left: 10px;
    position: relative;
    background: none;
    z-index: 5;
  }
  label {
    position: absolute;
    color: #aaa;
    left: 10px;
    font-size: 20px;
    bottom: 8px;
    transition: all .2s;
    &:focus {
      color: #000;
    }
  }
  input::placeholder { color: #aaaaaa; }
  input:focus { outline: none; }

  input:focus ~ label, input:valid ~ label {
    font-size: 16px;
    bottom: 40px;
    color: #666;
    font-weight: bold;
  }
  input:focus ~ span, input:valid ~ span {
    width: 100%;
  }
`
const ButtonStyle = styled.button`
  margin-right: 2px;
  outline: none;
  width: 5rem;
  height: 2rem;
  border: 2px solid #aaa;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  color: #aaa;
  &:hover {
    background: transparent;
    color: #000;
    border: 2px solid #000;
  }
  
`
const EditorWrap = styled.div`
  margin-top: 1rem;
  height: 100%;
  width: 1200px;
`

export default function Writing() {
  const editorRef = useRef();
  const navigate = useNavigate();
  // const {postingData} = usePosting();
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState('');
  const [content, setContent] = useState('');

  const [postingData, setPostingData] = useState({});
  const accessUserData = useSelector((state) => {return state.userAccessInfo});

  const handlePost = () => {
    postPosting(postingData, navigate);
  }

  useEffect(() => {
    console.log("포스팅 값 최신화 중");
    setPostingData({
      title: title,
      content: content,
      hashTag: tags,
      gradation: accessUserData.gradation,
      season: accessUserData.season,
      weather: accessUserData.weather,
      country: accessUserData.country,
      timeZone: accessUserData.timezone,
    });
  }, [title, tag, tags, content])

  const changeTags = (value) => {
    setTags(value);
  }
  const changeTag = (value) => {
    setTag(value);
  }

  const editorOnChange = () => {
    setContent(editorRef.current.getInstance().getMarkdown());
  }

  const testfunc = () => {
    const htmlcon = editorRef.current.getInstance().getHTML();
    const mkdcon = editorRef.current.getInstance().getMarkdown();
  }
  
  return (
    <WritingLayout>
      <div>
        <TitleWrap>
          <input required type="text" onChange={(e) => setTitle(e.target.value)}/>
          <label>제목</label>
          <ButtonStyle onClick={()=>handlePost()}>저장</ButtonStyle>
          <ButtonStyle onClick={()=>navigate('/')}>돌아가기</ButtonStyle>
        </TitleWrap>
        <TagInput tag={tag} tags={tags} changeTag={changeTag} changeTags={changeTags}/>
        <EditorWrap>
          <MarkDownEditor content="여기에 작성하세요" editorRef={editorRef} editorOnChange={editorOnChange}></MarkDownEditor>
        </EditorWrap>
      </div>
    </WritingLayout>
  )
  
}