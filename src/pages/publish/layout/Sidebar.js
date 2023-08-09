import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [menuData] = useState([
    {
      title: '대시보드',
      path: '/DashBorad',
      subMenus: []
    },
    {
      title: '작업관리',
      subMenus: [{ title: '작업목록', path: '/servicetask/ServicetaskAll' }, { title: '작업등록', path: '/servicetask/ServicetaskRegist' }, { title: '탬플릿 등록', path: '/servicetask/ServicetaskDetail' }]
    },
    {
      title: '접근제어',
      subMenus: [{ title: '사용자 목록', path: '/accessctrl/AccUser' }, { title: '장비 목록', path: '/accessctrl/AccEquipmentList' }]
    },
    {
      title: '장애관리',
      subMenus: [{ title: 'Submenu 5', path: '/Submenu5' }]
    },
    {
      title: '결재관리',
      subMenus: [{ title: '결재대기함', path: '/approval/ApprovalStandby' }, { title: '결재완료함', path: '/approval/ApprovalComplete' }, { title: '공람문서함', path: '/approval/ApprovalAll' }, { title: '반려함', path: '/approval/ApprovalReturn' }, { title: '임시보관함', path: '/approval/ApprovalTempStorage' }]
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
  const mainTitle = title;
  const subTitle = subMenus.title;
  const isSubMenu = hasSubMenus ? 'yse' : 'no';
  const sendData = {
    title: mainTitle,
    subtitle: subTitle,
    SubMenu: isSubMenu
  }

  return (
    <li className={`menu-item-level-1 ${isActive ? 'active' : ''}`}>
      {hasSubMenus
        ? (<button className='toggle-button-level-1' onClick={() => onClick(index)}>{title}</button>)
        : (<Link to={path} key={index} state={sendData} className='toggle-button-level-1' onClick={() => onClick(index)}>{title}</Link>)
        }
      {isActive && hasSubMenus && <MenuLevel2 parentTitle={title} subMenus={subMenus} />}
    </li>
  );
};

const MenuLevel2 = ({ subMenus, parentTitle }) => {
  const [activeIndex, setActiveIndex] = useState(null);

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
  const mainTitle = parentTitle;
  const subTitle = title;
  const isSubMenu = 'yes';
  const sendData = {
    title: mainTitle,
    subtitle: subTitle,
    SubMenu: isSubMenu
  }
  return (
    <li className={`menu-item-level-2 ${isActive ? 'active' : ''}`} onClick={() => onClick(index)} >
      <Link key={index} to={path} state={sendData} className='menu-item-level-2-link'>{title}</Link>
    </li>
  );
};

export default Sidebar;
