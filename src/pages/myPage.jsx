import Header from "../components/Header";
import "../style/myPage.scss"


export default function MyPage() {

  return (
    <div className="myPage_root_container">
      <Header/>
      <div className="myPage_content_wrapper">
        <div className="myPage_article">
          <div className="myPage_article_view">
            <div className="myPage_row_header"></div>
            <div className="myPage_row_body"></div>
          </div>
        </div>
        <aside className="myPage_aside_right"></aside>
      </div>
    </div>
  )
}