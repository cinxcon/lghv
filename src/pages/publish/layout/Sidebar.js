import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBarWork from './component/SideBarWork';
import SideBarSystem from './component/SideBarSystem';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [divStates, setDivStates] = useState(true);
  const navigate = useNavigate();
  const handleDivToggle = () => {
    console.log(divStates);
    setDivStates(!divStates);
    if (divStates === true) {
      navigate('/LGHV-UIX-SYS-001/LGHV-UIX-SYS-0001');
    } else {
      navigate('/LGHV-UIX-MAN/LGHV-UIX-MAN-0003');
    }
  };
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'close'} `}>
      <div className={`sidebar-toggle ${divStates ? 'show' : 'hide'}`}>
      <span>MY DESK</span>
        <button className='toggle-button' onClick={toggleSidebar}></button>
      </div>
      <div className={`work-space ${divStates ? 'show' : 'hide'}`}>
        <SideBarWork />
        <div className='fix-btn-wrap'>
          <button type='button' onClick={handleDivToggle} className='toggle-btn'>시스템 관리</button>
        </div>
      </div>
      <div className={`system-management ${divStates ? 'hide' : 'show'}` }>
        <h3 className='tit'>시스템 관리</h3>
        <SideBarSystem />
        <div className='fix-btn-wrap'>
          <button type='button' onClick={handleDivToggle} className='toggle-btn'>마이데스크</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
