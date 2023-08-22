import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [menuData] = useState([
    {
      title: '대시보드',
      path: '/LGHV-UIX-MAN-0003',
      subMenus: []
    },
    {
      title: '작업관리',
      path: '/LGHV-UIX-WRK/LGHV-UIX-WRK-0003',
      subMenus: [
        { title: '작업목록', path: '/LGHV-UIX-WRK/LGHV-UIX-WRK-0003' },
        { title: '일반 작업등록', path: '/LGHV-UIX-WRK/LGHV-UIX-WRK-0001' },
        { title: '긴급 작업등록', path: '/LGHV-UIX-WRK/LGHV-UIX-WRK-0002' }
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
      title: '통계',
      subMenus: [{ title: 'Submenu 6', path: '/Submenu6' }]
    },
    {
      title: '팝업 게시판',
      path: '/Submenu8',
      subMenus: []
    },
    {
      title: '시스템관리',
      subMenus: [{ title: 'Submenu 7', path: '/Submenu7' }]
    }
  ]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

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
            isActive={activeIndex === index}
            onClick={handleClick}
          />
        ))}
      </ul>
    </div>
  );
};

const MenuItemLevel1 = ({ index, title, path, subMenus, isActive, onClick }) => {
  const hasSubMenus = subMenus.length > 0;
  return (
    <li className={`menu-item-level-1 ${isActive ? 'active' : ''}`}>
      {/* {hasSubMenus
        ? (<button className='toggle-button-level-1' onClick={() => onClick(index)}>{title}</button>)
        : (<Link to={path} key={index} state={sendData} className='toggle-button-level-1' onClick={() => onClick(index)}>{title}</Link>)
        } */}
      <Link to={path} key={index} className='toggle-button-level-1' onClick={() => onClick(index)}>{title}</Link>
      {isActive && hasSubMenus && <MenuLevel2 parentTitle={title} subMenus={subMenus} />}
    </li>
  );
};

const MenuLevel2 = ({ subMenus, parentTitle }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <ul className='menu-level-2'>
      {subMenus.map((submenu, index) => (
        <MenuItemLevel2 key={index} parentTitle={parentTitle} title={submenu.title} index={index} path={submenu.path} isActive={activeIndex === index} onClick={handleClick} />
      ))}
    </ul>
  );
};

const MenuItemLevel2 = ({ index, parentTitle, title, path, isActive, onClick }) => {
  return (
    <li className={`menu-item-level-2 ${isActive ? 'active' : ''}`} onClick={() => onClick(index)} >
      <Link key={index} to={path} className='menu-item-level-2-link'>{title}</Link>
    </li>
  );
};

export default Sidebar;
