import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [systemData] = useState([
    {
      title: '계정관리',
      path: '/LGHV-UIX-SYS-001/LGHV-UIX-SYS-0001',
      subMenus: [
        { title: '부서관리', path: '/LGHV-UIX-SYS-001/LGHV-UIX-SYS-0001' },
        { title: '사용자관리', path: '/LGHV-UIX-SYS-001/LGHV-UIX-SYS-0002' },
        { title: '수신거부 사용자관리', path: '/LGHV-UIX-SYS-001/LGHV-UIX-SYS-0003' },
        { title: 'SMS 수신거부 가입자관리', path: '/LGHV-UIX-SYS-001/LGHV-UIX-SYS-0004' }
      ]
    },
    {
      title: '로그관리',
      path: '/LGHV-UIX-SYS-002/LGHV-UIX-SYS-0005',
      subMenus: [
        { title: '접속로그', path: '/LGHV-UIX-SYS-002/LGHV-UIX-SYS-0005' },
        { title: '개인정보 조회로그', path: '/LGHV-UIX-SYS-002/LGHV-UIX-SYS-0006' },
        { title: '문자발송로그', path: '/LGHV-UIX-SYS-002/LGHV-UIX-SYS-0007' },
        { title: '메일발송로그', path: '/LGHV-UIX-SYS-002/LGHV-UIX-SYS-0008' },
        { title: '고객문자 발송내역', path: '/LGHV-UIX-SYS-002/LGHV-UIX-SYS-0009' },
        { title: '장애 발생 서비스 가입자 문자 발송', path: '/LGHV-UIX-SYS-002/LGHV-UIX-SYS-0010' }
      ]
    },
    {
      title: '공통관리',
      path: '/LGHV-UIX-SYS-003/LGHV-UIX-SYS-0011',
      subMenus: [
        { title: '코드관리', path: '/LGHV-UIX-SYS-003/LGHV-UIX-SYS-0011' },
        { title: '권한관리', path: '/LGHV-UIX-SYS-003/LGHV-UIX-SYS-0012' },
        { title: '메뉴권한관리', path: '/LGHV-UIX-SYS-003/LGHV-UIX-SYS-0013' }
      ]
    },
    {
      title: '보고서',
      path: '/LGHV-UIX-SYS-004/LGHV-UIX-SYS-0014',
      subMenus: [
        { title: '주간보고서', path: '/LGHV-UIX-SYS-004/LGHV-UIX-SYS-0014' },
        { title: '원갈보고서', path: '/LGHV-UIX-SYS-004/LGHV-UIX-SYS-0015' }
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
        ? (<button className='toggle-button-level-1'><span>{title}</span></button>)
        : (<Link to={path} key={index} className='toggle-button-level-1'><span>{title}</span></Link>)
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
