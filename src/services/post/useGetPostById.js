import axios from "axios";
import { useEffect, useState } from "react";


export default function useGetPostById(id) {
  const boardid = id;
  const apiUrl = `http://localhost:8080/board/get/${boardid}`;
  const [postData, setPostData] = useState({});
  const [postLoading, setPostLoading] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setPostLoading(true);
        const response = await axios.get(apiUrl);
        setPostData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setPostLoading(false);
      }
    }
    fetchData();
  }, [])
  return {
    postData,
    postLoading,
    error,
  }
}