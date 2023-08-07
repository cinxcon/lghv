import { useState } from 'react';
import ContentTitle from '../layout/ContentTitle';
import { Popup1, Popup2 } from '../popup/Popup';
import PopupWorkOnLoad from './popupDetail/Popup_WorkOnLoad';
import PopupNotiMethod from './popupDetail/Popup_NotiMethod';
import RegistNomal from './component/RegistNomal';
import RegistUrgent from './component/RegistUrgent';

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
        <Popup1 open={onLoad} close={() => { setOnLoad(false) }} header="불러오기" type={'xlarge'}>
          <PopupWorkOnLoad />
        </Popup1>
        <Popup1 open={approvalLine} close={() => { setApprovalLine(false) }} header="결제선 지정">
          <PopupNotiMethod />
        </Popup1>
        <Popup1 open={notimethod} close={() => { setNotimethod(false) }} header="통보방법">
          <PopupNotiMethod />
        </Popup1>
        <Popup2 open={work} close={() => { setNewWork(false) }}>
          <div>작성중인 내용이 초기화 됩니다.<br /> 새로 작성 하시겠습니까?</div>
        </Popup2>
        <div className='content-section'>
          <h3>작업개요 <span>(*) 검토자 : 권역별 작업담당자 선택</span></h3>
        </div>
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
      {activeTab === '긴급작업 등록' && <RegistUrgent />}
    </div>
  );
};

export default ServicetaskRegist;
