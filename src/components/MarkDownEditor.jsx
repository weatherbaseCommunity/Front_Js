import React, { useState, useRef, forwardRef, useImperativeHandle } from "react";
import styled from "styled-components";
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

const MarkDownEditor = ({content, editorRef, editorOnChange}) => {
  return (
    <>
      <Editor
        ref={editorRef}
        initialValue={content || " "}
        previewStyle="vertical"
        height="85vh"
        initialEditType="markdown"
        useCommandShortcut={false}
        language="ko"
        onChange={(e) => editorOnChange()}
      />
    </>
  )
}

export default MarkDownEditor;