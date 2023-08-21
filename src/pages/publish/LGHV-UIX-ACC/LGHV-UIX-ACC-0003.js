import { useState } from 'react';
import ContentTitle from '../layout/ContentTitle';
import AccUserList from './LGHV-UIX-ACC-0001';
import AccUserGroupList from './LGHV-UIX-ACC-0002';

function AccUser() {
  const [activeTab, setActiveTab] = useState('목록');
  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  return (
    <>
      <ContentTitle />
      {/* 사용자(사용자 및 그룹) 조회 */}
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
      {activeTab === '목록' && <AccUserList toUserRegist="/accessctrl/LGHV-UIX-ACC-0006" />}
      {activeTab === '그룹' && <AccUserGroupList toUserRegist="/accessctrl/LGHV-UIX-ACC-0007" />}
    </>
  );
};

export default AccUser;
