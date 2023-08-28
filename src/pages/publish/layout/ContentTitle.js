import { Link } from 'react-router-dom';

function ContentTitle({ data }) {
  console.log(data);
  const isSubMenu = data.SubMenu;

  return (
    <>
      <div className="content-title">
        <h2>{isSubMenu === 'yes' ? (<span>{data.title}<em>{data.subtitle}</em></span>) : (<span>{data.title}</span>) }</h2>
        <div className="breadcrumb">
          <Link to='/'className="home-link">홈</Link>
          <span>{data.title}</span>
          {isSubMenu !== undefined && isSubMenu === 'yes' ? (<span>{ data.subtitle }</span>) : '' }
        </div>
      </div>
    </>
  )
}
export default ContentTitle;
