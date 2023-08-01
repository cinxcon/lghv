import { Link } from 'react-router-dom';

function ContentTitle() {
  return (
    <>
      <div className="content-title">
        <h2>결재함 테스트</h2>
        <div className="breadcrumb">
          <span><Link to=''>홈</Link></span>
          <span><Link to=''>결재관리</Link></span>
          <Link to='' className='color-default'>결재함 테스트</Link>
        </div>
      </div>
    </>
  )
}

export default ContentTitle;
