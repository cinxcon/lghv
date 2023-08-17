import { Link, useLocation } from 'react-router-dom';

function ContentTitle({ Detail }) {
  const location = useLocation(); // 추가된 부분
  const data = location.state; // 추가된 부분
  const isSubMenu = data.SubMenu;
  const isDetail = data.isDetail;
  const isUserRegist = data.isUserRegist;

  return (
    <>
      <div className="content-title">
        <h2>{isSubMenu === 'yes' ? (<span>{data.subtitle}</span>) : (<span>{data.title}</span>) } {isDetail !== undefined && isDetail === 'yes' ? (<span className="title-detail">상세</span>) : null} {isUserRegist !== undefined && isUserRegist === 'yes' ? (<span className="title-detail">등록</span>) : null}</h2>
        <div className="breadcrumb">
          <Link to='/'className="home-link">홈</Link>
          <span>{data.title}</span>
          {isSubMenu === 'yes' ? (<span>{ data.subtitle }</span>) : null }
          {isDetail !== undefined && isDetail === 'yes' ? (<span>상세조회</span>) : null}
          {isUserRegist !== undefined && isUserRegist === 'yes' ? (<span>등록</span>) : null}
        </div>
      </div>
    </>
  )
}

export default ContentTitle;
