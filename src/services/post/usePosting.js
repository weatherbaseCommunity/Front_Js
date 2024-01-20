import { useEffect, useState } from "react";
import useConnectingAxios from "../../components/utils/useConnectingAxios";
import { useNavigate } from "react-router-dom";


export default function usePosting() {
  const navigate = useNavigate();
  const connectingAxios = useConnectingAxios();
  const apiUrl = '/board/save'

  const [data, setData] = useState(null);
  const postingData = async (requestData) => {
    try {
      if(connectingAxios) {
        const response = await connectingAxios.post(apiUrl, requestData)
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