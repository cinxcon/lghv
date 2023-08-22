import { Link } from 'react-router-dom';

function ContentTitle({ data }) {
  console.log(data);
  const isSubMenu = data.SubMenu;
  const isDetail = data.isDetail;
  const isUserRegist = data.isUserRegist;

  return (
    <>
      <div className="content-title">
        <h2>{isSubMenu === 'yes' ? (<span>{data.subtitle}</span>) : (<span>{data.title}</span>) } {isDetail !== undefined && isDetail === 'yes' ? (<span className="title-detail">상세</span>) : null} {isUserRegist !== undefined && isUserRegist === 'yes' ? (<span className="title-detail">등록</span>) : null}</h2>
        <div className="breadcrumb">
          <Link to='/'className="home-link">홈</Link>
          <span className='color-success'>{data.title}</span>
          {isSubMenu !== undefined && isSubMenu === 'yes' ? (<span>{ data.subtitle }</span>) : '' }
          {isDetail !== undefined && isDetail === 'yes' ? (<span>상세조회</span>) : ''}
          {isUserRegist !== undefined && isUserRegist === 'yes' ? (<span>등록</span>) : null}
        </div>
      </div>
    </>
  )
}
export default ContentTitle;
