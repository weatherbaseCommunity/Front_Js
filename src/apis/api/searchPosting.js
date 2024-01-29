import axios from "axios";

const searchPosting = async (type, search) => {
  const apiUrl = `${process.env.REACT_APP_SERVER_URL}/board/search`;
  const params = {type:type, search: search}

  const response = await axios.get(apiUrl, {params})
  .then((result) => {
    return result.data;
  }).catch((error) => {
    console.log(error);
  });

  return response;
}

export default searchPosting;