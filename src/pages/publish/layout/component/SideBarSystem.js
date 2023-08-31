import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [systemData] = useState([
    {
      title: '계정관리',
      path: '/LGHV-UIX-SYS/LGHV-UIX-SYS-0001',
      subMenus: [
        { title: '부서관리', path: '/LGHV-UIX-SYS/LGHV-UIX-SYS-0001' },
        { title: '사용자관리', path: '/LGHV-UIX-SYS/LGHV-UIX-SYS-0002' },
        { title: '수신거부 사용자관리', path: '/LGHV-UIX-SYS/LGHV-UIX-SYS-0003' },
        { title: 'SMS 수신거부 가입자관리', path: '/LGHV-UIX-SYS/LGHV-UIX-SYS-0004' },
        { title: '관리자 등록정보', path: '/LGHV-UIX-SYS/LGHV-UIX-SYS-0005' }
      ]
    }
  ]);

  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');

  return (
    <ul className='menu-level-1'>
        {systemData.map((menuItem, index) => (
            <MenuItemLevel1
            key={index}
            index={index}
            title={menuItem.title}
            ptitle={menuItem.ptitle}
            path={menuItem.path}
            subMenus={menuItem.subMenus}
            pathSegments={pathSegments}
            />
        ))}
    </ul>
  );
};

const MenuItemLevel1 = ({ index, title, path, subMenus, pathSegments }) => {
  const hasSubMenus = subMenus.length > 0;
  const isActive = pathSegments[0] === path.split('/')[1];
  return (
    <li className={`menu-item-level-1 ${isActive ? 'active' : ''} ${hasSubMenus ? 'has-sub' : ''}`}>
      {isActive
        ? (<button className='toggle-button-level-1'>{title}</button>)
        : (<Link to={path} key={index} className='toggle-button-level-1'>{title}</Link>)
        }
      {isActive && hasSubMenus && <MenuLevel2 parentTitle={title} subMenus={subMenus} pathSegments={pathSegments} />}
    </li>
  );
};

const MenuLevel2 = ({ subMenus, parentTitle, pathSegments }) => {
  return (
    <ul className='menu-level-2'>
      {subMenus.map((submenu, index) => (
        <MenuItemLevel2 key={index} parentTitle={parentTitle} title={submenu.title} index={index} path={submenu.path} pathSegments={pathSegments} />
      ))}
    </ul>
  );
};

const MenuItemLevel2 = ({ index, title, path, pathSegments }) => {
  const isActive = pathSegments[1] === path.split('/')[2];
  return (
    <li className={`menu-item-level-2 ${isActive ? 'active' : ''}`} >
      <Link key={index} to={path} className='menu-item-level-2-link'>{title}</Link>
    </li>
  );
};

export default Sidebar;
