import React from "react";
import '../style/postingCommentItem.scss'

export default function PostingCommentItem({commentData}) {

  let createdDate = (commentData.createdDate || '').split('T', 2);
  createdDate[1] = (createdDate[1] || '').slice(0, 8);

  return (
    <div className="posting_comment_item">
      <div className="posting_comment_content">
        <div className="posting_comment_info">
          <span>{commentData.userNickname}</span>
          <div className="conmment_info_right">
            <time dateTime={commentData.createdDate} data-format="Y-m-d H:i:s">{`${createdDate[0]} ${createdDate[1]}`}</time>
          </div>
        </div>
        <div className="posting_comment_message">
          <pre class>{commentData.content}</pre>
        </div>
      </div>
    </div>
  )
}