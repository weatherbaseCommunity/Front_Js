import { useEffect, useMemo, useRef, useState } from "react";
import Header from "../components/Header";
import useUserInfo from "../services/user/useUserInfo";
import "../style/myPage.scss"
import useUserBoard from "../services/user/useUserBoard";

import updateNickname from "../apis/api/updateNickname";



export default function MyPage() {
  const {userInfo, userInfoError, userInfoLoading} = useUserInfo();
  const {userBoard, userBoardError, userBoardLoading} = useUserBoard();
  const nicknameInputRef = useRef();
  const [nickname, setNickname] = useState();

  const inputClear = () => {
    nicknameInputRef.current.value = "";
  }

  const handleOnClickButton = () => {
    updateNickname(nickname);
  }
  
  if (userInfoLoading || userBoardLoading) {
    return <div>Loading....</div>
  }

  return (
    <div className="myPage_root_container">
      <Header/>
      <div className="myPage_content_wrapper">
        <div className="myPage_article containe_fluid">
          <div className="myPage_article_view">
            <div className="myPage_header">
              <div className="myPage_user_info">
                <div className="myPage_user_info_left">
                  <div className="myPage_user_info_icon">
                    <img src="https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg" alt="" />
                  </div>
                </div>
                <div className="myPage_user_info_right">
                  <div className="myPage_user_info_nickname_area">
                    <input 
                      ref={nicknameInputRef}
                      className="user_info_nickname" 
                      type="text" 
                      defaultValue={userInfo && userInfo.nickname}
                      onFocus={() => inputClear()}
                      onChange={(e) => setNickname(e.target.value)}
                    />
                    <button 
                      className="user_info_nicknameChange_button"
                      onClick={()=> handleOnClickButton()}
                    >변경하기</button>
                  </div>
                  <div>{userInfo && userInfo.email}</div>
                  <div>{`${userInfo && (userInfo.createdDateTime || '').substr(0, 10)} 가입`}</div>
                </div>
              </div>
            </div>
            <div className="myPage_body">
              <div className="myPage_content">
                <div className="myPage_content_category_wrapper">
                  <div className="myPage_content_category">
                    <div className="category_item">
                      <span className="active">내글</span>
                    </div>
                  </div>
                </div>
                <div className="myPage_content_list_table">
                  <div className="content_column column_head">
                    <div className="column_inner">
                      <div className="column_inner_left">
                        <div className="column col_id">번호</div>
                        <div className="column col_title">제목</div>
                      </div>
                      <div className="column_inner_right">
                        <div className="column col_time">작성일</div>
                        <div className="column col_like">좋아요</div>
                      </div>
                    </div>
                  </div>
                  {(userBoard || {}).length > 0 && userBoard.map((board) => (
                    <div className="content_column" key={board.id}>
                      <div className="column_inner">
                        <div className="column_inner_left">
                          <div className="column col_id">{board.id}</div>
                          <div className="column col_title">{board.title}</div>
                        </div>
                        <div className="column_inner_right">
                          <div className="column col_time">{(board.createdTime || '').substr(0, 10)}</div>
                          <div className="column col_like">{board.likeCnt}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}