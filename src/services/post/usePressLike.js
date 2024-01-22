import { useEffect, useState } from "react";
import useConnectingAxios from "../../components/utils/useConnectingAxios";
import useAuth from "../auth/useAuth";
import { useNavigate } from "react-router-dom";

export default function usePressLike() {

  const apiUrl = `http://localhost:8080/board/increaseLike`;
  const connectingAxios = useConnectingAxios();
  const {isSignIn} = useAuth();
  const navigate = useNavigate();

  const pressLike = async (boardId) => {
    if (isSignIn) {
      await connectingAxios.post(apiUrl, boardId)
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