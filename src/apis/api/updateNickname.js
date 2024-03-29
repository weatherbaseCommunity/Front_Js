import axios from '../utils/instance'

const updateNickname = async (nickname) => {
  const apiUrl = '/user/mypage/update'

  await axios.post(apiUrl, nickname)
  .then(() => {
    alert('닉네임 변경 성공');
    window.location.reload();
  }).catch((error) => {
    console.log('닉네임 변경 에러 발생!');
    console.log(error);
  })
}

export default updateNickname;