import { useState } from 'react';
import ContentTitle from '../layout/ContentTitle';
import { Popup } from '../popup/Popup';
import PopupNotiMethod from './popupDetail/Popup_NotiMethod';
import PopupProcessHistory from './popupDetail/Popup_ProcessHistory';
import RegistNomal from './component/RegistNomal';

function ServicetaskRegist() {
  const [onLoad, setOnLoad] = useState(false);
  const [approvalLine, setApprovalLine] = useState(false);
  const [notimethod, setNotimethod] = useState(false);
  const [work, setNewWork] = useState(false);
  const [activeTab, setActiveTab] = useState('일반작업 등록');

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  return (
    <>
      <ContentTitle />
      <div className='content-section'>
        <div className="detail-top-btn-group">
          <button className='btn' onClick={() => { setOnLoad(true) }}>불러오기</button>
          <button className='btn' onClick={() => { setApprovalLine(true) }}>결제선 지정</button>
          <button className='btn' onClick={() => { setNotimethod(true) }}>통보방법</button>
          <button className='btn' onClick={() => { setNewWork(true) }}>새로작성</button>
        </div>
        <Popup open={onLoad} close={() => { setOnLoad(false) }} header="불러오기">
          <PopupNotiMethod />
        </Popup>
        <Popup open={approvalLine} close={() => { setApprovalLine(false) }} header="결제선 지정">
          <PopupNotiMethod />
        </Popup>
        <Popup open={notimethod} close={() => { setNotimethod(false) }} header="통보방법">
          <PopupNotiMethod />
        </Popup>
        <Popup open={work} close={() => { setNewWork(false) }} header="새로작성">
          <PopupProcessHistory />
        </Popup>
        <div className="tabs-container">
          <div className='tabs-wrap'>
            <Tab label="일반작업 등록" activeTab={activeTab} onClick={handleTabClick} className="active" />
            <Tab label="긴급작업 등록" activeTab={activeTab} onClick={handleTabClick} />
          </div>
          <TabContent activeTab={activeTab} />
        </div>
      </div>
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
    <div className="tab-content">
      {activeTab === '일반작업 등록' && <RegistNomal />}
      {activeTab === '긴급작업 등록' && <div>Tab 2 Content</div>}
    </div>
  );
};

export default ServicetaskRegist;
