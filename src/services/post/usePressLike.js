import { useEffect, useState } from "react";
import useConnectingAxios from "../../components/utils/useConnectingAxios";

export default function usePressLike() {

  const apiUrl = `http://localhost:8080/board/increaseLike`;
  const connectingAxios = useConnectingAxios();

  const pressLike = async (boardId) => {
    if (connectingAxios) {
      await connectingAxios.post(apiUrl, boardId)
      .then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      })
    }
  };

  return {
    pressLike,
  }
}