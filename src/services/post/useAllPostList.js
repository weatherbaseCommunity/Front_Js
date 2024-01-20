import { useEffect, useState } from "react";
import ServerAxios from "../../components/utils/ServerAxios";
import axios from "axios";


export default function useAllPostList() {

  const [postData, setPostData] = useState(null);
  const [postLoading, setPostLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setPostLoading(true);
        const response = await axios.get(`http://localhost:8080/board/AllBoards`);
        setPostData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setPostLoading(false);
      }
    };
    fetchData();
  },[])

  return {
    postData, postLoading, error
  }
}
  

