import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function ContentTitle({ data }) {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
  const isSubMenu = data.SubMenu;
  const systemUrl = pathSegments[0].split('-');
  const [isSystemMenu, setIsSystemMenu] = useState(false);
  useEffect(() => {
    if (systemUrl[2] === 'SYS') {
      setIsSystemMenu(true)
    }
  }, []);

  return (
    <>
      <div className="content-title">
        <h2>{isSubMenu === 'yes' ? (<span>{data.title}<em>{data.subtitle}</em></span>) : (<span>{data.title}</span>) }</h2>
        <div className="breadcrumb">
          <Link to='/'className="home-link">홈</Link>
          {isSystemMenu ? (<span>시스템관리</span>) : null}
          <span>{data.title}</span>
          {isSubMenu !== undefined && isSubMenu === 'yes' ? (<span>{ data.subtitle }</span>) : '' }
        </div>
      </div>
    </>
  )
}
export default ContentTitle;
