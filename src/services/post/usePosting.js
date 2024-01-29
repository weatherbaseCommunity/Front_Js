import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../apis/utils/instance"



export default function usePosting() {
  const navigate = useNavigate();
  const apiUrl = '/board/save'

  const [data, setData] = useState(null);
  const postingData = async (requestData) => {
    const response = await axios.post(apiUrl, requestData)
    .then((result) => {
      setData(result.data);
    })
    try {
      if(axios) {
        const response = await axios.post()
        .then((result) => {
          navigate('/');
          return result
        })
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    data,
    postingData
  };
}