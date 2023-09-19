import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
const SideBarWork = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('../data/menu.json'); // JSON 파일 경로를 넣어주세요
      setMenuData(response.data[0].menu);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
  return (
    <ul className='menu-level-1'>
        {menuData.map((menuItem, index) => (
        <MenuItemLevel1
            key={index}
            index={index}
            title={menuItem.menuName}
            path={menuItem.menuUrl}
            subMenus={menuItem.menu}
            pathSegments={pathSegments}
            id={menuItem.menuIndex}
        />
        ))}
    </ul>
  );
};

const MenuItemLevel1 = ({ index, title, path, subMenus, pathSegments, id }) => {
  const hasSubMenus = subMenus.length > 0;
  const isActive = pathSegments[0] === path.split('/')[1];
  return (
    <li className={`menu-item-level-1 ${isActive ? 'active' : ''} ${hasSubMenus ? 'has-sub' : ''}`} id={`side_menu_${id}`}>
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
        <MenuItemLevel2 key={index} parentTitle={parentTitle} title={submenu.menuName} index={index} path={submenu.menuUrl} pathSegments={pathSegments} />
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

export default SideBarWork;
