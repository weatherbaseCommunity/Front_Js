import useAuth from "../auth/useAuth";
import { useNavigate } from "react-router-dom";
import axios from '../../apis/utils/instance';

export default function useReplyComment() {
  const navigate = useNavigate();
  const {isSignIn} = useAuth();
  const apiUrl = '/comments/save';
  
  const ReplyComment = async (replyData, boardId) => {
    if (isSignIn) {
      await axios.post(apiUrl, {
        content: replyData,
        boardId: boardId,
        commentId: null,
      }).then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      })
    } else {
      alert("로그인 후 이용해 주십시오");
      navigate('/signIn');
    }
  }
  return {
    ReplyComment,
  }
}