import { useEffect, useState } from "react";
import axios from "axios";


export default function useAllPostList() {

  const [allPostData, setAllPostData] = useState(null);
  const [allPostLoading, setAllPostLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setAllPostLoading(true);
        const response = await axios.get(`http://localhost:8080/board/AllBoards`);
        setAllPostData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setAllPostLoading(false);
      }
    };
    fetchData();
  },[])

  return {
    allPostData, allPostLoading, error
  }
}
  

