import useConnectingAxios from "../../components/utils/useConnectingAxios";

export default function useReplyComment() {
  const connectingAxios = useConnectingAxios();
  const apiUrl = '/comments/save';
  
  const ReplyComment = async (replyData, boardId) => {
    if (connectingAxios) {
      await connectingAxios.post(apiUrl, {
        content: replyData,
        boardId: boardId,
        commentId: null,
      }).then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      })
    }
  }
  return {
    ReplyComment,
  }
}