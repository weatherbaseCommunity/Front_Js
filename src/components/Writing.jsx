import React, { useRef } from "react";
import styled from "styled-components";
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor, EditorProps } from '@toast-ui/react-editor';

import MarkDownEditor from "./MarkDownEditor";

const WritingLayout = styled.div`
  width: 100%;
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
`

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
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
const EditorWrap = styled.div`
  margin-top: 1rem;
  height: 100%;
  width: 1200px;
`

export default function Writing() {
  const editorRef = useRef();
  const inputRef = useRef();

  const testfunc = () => {
    const title = inputRef.current.value;
    const htmlcon = editorRef.current.getInstance().getHTML();
    const mkdcon = editorRef.current.getInstance().getMarkdown();

    console.log(title);
    console.log(htmlcon);
    console.log("==================");
    console.log(mkdcon);
  }
  return (
    <WritingLayout>
      <div>
        <TitleWrap>
          <input type="text" required ref={inputRef}/>
          <label>제목</label>
        </TitleWrap>
        <EditorWrap>
          <MarkDownEditor content="입력하시오" editorRef={editorRef}></MarkDownEditor>
        </EditorWrap>
        <button onClick={testfunc}>123</button>
      </div>
    </WritingLayout>
  )
  
}