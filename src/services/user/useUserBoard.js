import { useEffect, useState } from "react";
import axios from '../../apis/utils/instance'


export default function useUserBoard() {
  const [userBoard, setUserBoard] = useState();
  const [userBoardError, setUserBoardError] = useState();
  const [userBoardLoading, setUserBoardLoading] = useState();

  const apiUrl = `/board/myBoard`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setUserBoardLoading(true);
        const response = await axios.get(apiUrl);
        setUserBoard(response.data);
      } catch (error) {
        setUserBoardError(error);
      } finally {
        setUserBoardLoading(false);
      }
    }
    fetchData();
  }, [])

  return {
    userBoard,
    userBoardError,
    userBoardLoading
  }
}