import { useState } from 'react';
import ContentTitle from '../layout/ContentTitle';
import AccUserList from './AccUserList';
import AccUserGroupList from './AccUserGroupList';

function AccUser() {
  const [activeTab, setActiveTab] = useState('목록');
  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  return (
    <>
      <ContentTitle />
      <div className='content-section tabs-container'>
        <div className='tabs-wrap'>
          <Tab label="목록" activeTab={activeTab} onClick={handleTabClick} className="active" />
          <Tab label="그룹" activeTab={activeTab} onClick={handleTabClick} />
        </div>
      </div>
      <TabContent activeTab={activeTab} />
    </>
  )
}

const Tab = ({ label, activeTab, onClick }) => {
  const handleClick = () => {
    onClick(label);
  };

  return (
    <div className={`tab ${activeTab === label ? 'active' : ''}`} onClick={handleClick}>
      {label}
    </div>
  );
};

const TabContent = ({ activeTab }) => {
  return (
    <>
      {activeTab === '목록' && <AccUserList toUserRegist="/accessctrl/AccUserRegist" />}
      {activeTab === '그룹' && <AccUserGroupList />}
    </>
  );
};

export default AccUser;
