import React, { useRef } from "react";
import '../../style/replyCommentForm.scss'
import useReplyComment from "../../services/post/useReplyComment";
import useGetPostById from "../../services/post/useGetPostById";
import getPostingById from "../../apis/api/getPostingById";


export default function ReplyCommentForm({id, updateData}) {
  const {ReplyComment} = useReplyComment();
  const replyTextRef = useRef();

  const replyTextButtonOnClick = async () => {
    // 서버에 댓글 데이터 올려줌
    await ReplyComment(replyTextRef.current.value, id);
    // 댓글이 올라간 데이터를 다시 불러옴
    getPostingById(id).then((result) => {
      updateData(result);
    });
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