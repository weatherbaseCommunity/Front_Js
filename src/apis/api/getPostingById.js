import axios from "axios";


const getPostingById = async (id) => {
  const boardId = id;
  const apiUrl = `http://localhost:8080/board/get/${boardId}`;

  const response = await axios.get(apiUrl)
  .then((result) => {
    return result.data;
  }).catch((error) => {
    console.log('게시글 조회 오류 발생!');
    console.log(error);
  });

  return response;
}

export default getPostingById;