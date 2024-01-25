import { useEffect, useState } from "react";
import axios from '../../apis/utils/instance'


export default function useUserInfo() {

  const [userInfo, setUserInfo] = useState();
  const [userInfoError, setUserInfoError] = useState();
  const [userInfoLoading, setUserInfoLoading] = useState();

  const apiUrl = `/user/info`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setUserInfoLoading(true);
        const response = await axios.get(apiUrl);
        setUserInfo(response.data);
      } catch (error) {
        setUserInfoError(error);
      } finally {
        setUserInfoLoading(false);
      }
    }
    fetchData();
  }, [])
  return {
    userInfo,
    userInfoError,
    userInfoLoading
  }
}