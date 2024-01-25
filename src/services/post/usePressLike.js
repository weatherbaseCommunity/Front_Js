import useAuth from "../auth/useAuth";
import { useNavigate } from "react-router-dom";
import axios from '../../apis/utils/instance';

export default function usePressLike() {

  const apiUrl = `/board/increaseLike`;
  const {isSignIn} = useAuth();
  const navigate = useNavigate();

  const pressLike = async (boardId) => {
    if (isSignIn) {
      await axios.post(apiUrl, boardId)
      .then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      })
    } else {
      alert("로그인 후 이용해 주십시오")
      navigate('/signIn')
    }
  };

  return {
    pressLike,
  }
}