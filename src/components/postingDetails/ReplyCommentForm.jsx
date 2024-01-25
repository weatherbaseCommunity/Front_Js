import React, { useRef } from "react";
import '../../style/replyCommentForm.scss'
import useReplyComment from "../../services/post/useReplyComment";


export default function ReplyCommentForm({id}) {
  const {ReplyComment} = useReplyComment();
  const replyTextRef = useRef();

  const replyTextButtonOnClick = () => {
    ReplyComment(replyTextRef.current.value, id);
    window.location.reload();
  }


  return (
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
          <div className="reply_form_submit_button_wrapper">
            <button className="reply_form_submit_button" 
              onClick={() => replyTextButtonOnClick()} 
              type="submit" 
              tabIndex={103}
            >작성</button>
          </div>
        </div>
      </div>
    </form>
  )
}