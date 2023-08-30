import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ activeMenu }) => {
  const [menuData] = useState([
    {
      title: '대시보드',
      path: '/LGHV-UIX-MAN/LGHV-UIX-MAN-0003',
      subMenus: []
    },
    {
      title: '작업관리',
      path: '/LGHV-UIX-WRK/LGHV-UIX-WRK-0003',
      subMenus: [
        { title: '작업목록', path: '/LGHV-UIX-WRK/LGHV-UIX-WRK-0003' },
        { title: '일반 작업등록', path: '/LGHV-UIX-WRK/LGHV-UIX-WRK-0001' },
        { title: '긴급 작업등록', path: '/LGHV-UIX-WRK/LGHV-UIX-WRK-0002' },
        { title: '템플릿 목록', path: '/LGHV-UIX-WRK/LGHV-UIX-WRK-0011' },
        { title: '템플릿 등록', path: '/LGHV-UIX-WRK/LGHV-UIX-WRK-0012' }
      ]
    },
    {
      title: '접근제어',
      path: '/LGHV-UIX-ACC/LGHV-UIX-ACC-0001',
      subMenus: [
        { title: '사용자 목록', path: '/LGHV-UIX-ACC/LGHV-UIX-ACC-0001' },
        { title: '장비 목록', path: '/LGHV-UIX-ACC/LGHV-UIX-ACC-0005' },
        { title: '사용자 등록', path: '/LGHV-UIX-ACC/LGHV-UIX-ACC-0007' },
        { title: '장비 등록', path: '/LGHV-UIX-ACC/LGHV-UIX-ACC-0008' },
        { title: '접근제어정책목록', path: '/LGHV-UIX-ACC/LGHV-UIX-ACC-0010' }
      ]
    },
    {
      title: '장애관리',
      path: '/LGHV-UIX-BLK/LGHV-UIX-BLK-0002',
      subMenus: [{ title: '장애목록', path: '/LGHV-UIX-BLK/LGHV-UIX-BLK-0002' },
        { title: '장애등록', path: '/LGHV-UIX-BLK/LGHV-UIX-BLK-0001' }
      ]
    },
    {
      title: '결재관리',
      path: '/LGHV-UIX-APR/LGHV-UIX-APR-0001',
      subMenus: [
        { title: '결재대기함', path: '/LGHV-UIX-APR/LGHV-UIX-APR-0001' },
        { title: '결재완료함', path: '/LGHV-UIX-APR/LGHV-UIX-APR-0002' },
        { title: '공람문서함', path: '/LGHV-UIX-APR/LGHV-UIX-APR-0003' },
        { title: '반려함', path: '/LGHV-UIX-APR/LGHV-UIX-APR-0004' },
        { title: '임시보관함', path: '/LGHV-UIX-APR/LGHV-UIX-APR-0005' },
        // ↓↓↓  테스트 ↓↓↓
        { title: '버튼모음', path: '/LGHV-UIX-APR/ApprovalTest' },
        { title: '팝업테스트', path: '/LGHV-UIX-APR/ApprovalPop' }
      ]
    },
    {
      title: '셀관리',
      path: '/LGHV-UIX-STA/LGHV-UIX-STA-0001',
      subMenus: [{ title: 'Submenu 6', path: '/Submenu6' }]
    },
    {
      title: '공지사항',
      path: '/LGHV-UIX-SYS/LGHV-UIX-SYS-0001',
      subMenus: [{ title: '공지사항', path: '/Submenu7' }]
    },
    {
      title: '시스템관리',
      path: '/LGHV-UIX-SYS/LGHV-UIX-SYS-0001',
      subMenus: [{ title: '시스템 관리', path: '/Submenu7' }]
    }
  ]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'close'}`}>
      <div className='sidebar-toggle'>
      <span>MY DESK</span>
        <button className='toggle-button' onClick={toggleSidebar}></button>
      </div>
      <ul className='menu-level-1'>
        {menuData.map((menuItem, index) => (
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
    </div>
  );
};

const MenuItemLevel1 = ({ index, title, path, subMenus, pathSegments }) => {
  const hasSubMenus = subMenus.length > 0;
  const isActive = pathSegments[0] === path.split('/')[1];
  return (
    <li className={`menu-item-level-1 ${isActive ? 'active' : ''}`}>
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
