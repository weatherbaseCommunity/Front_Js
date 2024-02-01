import axios from '../utils/instance'

const postPosting = async (requestData, navigate) => {
  const apiUrl = '/board/save'

  await axios.post(apiUrl, requestData)
  .then(() => {
    alert('포스팅 성공!')
    navigate('/');
  }).catch((error) => {
    console.log('포스팅 에러 발생!');
    console.log(error);
  })

}

export default postPosting;