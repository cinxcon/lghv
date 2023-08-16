import { useState } from 'react';
import ContentTitle from '../layout/ContentTitle';
import { Popup, Alert } from '../popup/Popup';
import PopupNotiMethod from '../popup/popupDetail/Popup_NotiMethod';
import PopupWorkOnLoad from '../popup/popupDetail/Popup_WorkOnLoad';
import RegistNomal from './component/RegistNomal';
// import RegistUrgent from './component/RegistUrgent';
import PopupLine from '../popup/popupDetail/Popup_Approval';

function ServicetaskRegist() {
  const [onLoad, setOnLoad] = useState(false);
  const [approvalLine, setApprovalLine] = useState(false);
  const [notimethod, setNotimethod] = useState(false);
  const [clear, setClear] = useState(false);
  // const [activeTab, setActiveTab] = useState('일반작업 등록');

  // const handleTabClick = (label) => {
  //   setActiveTab(label);
  // };

  return (
    <>
      <ContentTitle />
      <div className='content-section'>
        <div className="detail-top-btn-group">
          <button className='btn btn-pop' onClick={() => { setOnLoad(true) }}>불러오기</button>
          <button className='btn btn-pop' onClick={() => { setApprovalLine(true) }}>결제선 지정</button>
          <button className='btn btn-pop' onClick={() => { setNotimethod(true) }}>통보방법</button>
          <button className='btn btn-ref' onClick={() => { setClear(true) }}>새로작성</button>
        </div>
        <Popup open={onLoad} close={() => { setOnLoad(false) }} type="xlg" header="불러오기">
          <PopupWorkOnLoad />
        </Popup>
        <Popup open={approvalLine} close={() => { setApprovalLine(false) }} type="xlg" header="결제선 지정">
          <PopupLine />
        </Popup>
        <Popup open={notimethod} close={() => { setNotimethod(false) }} header="통보방법">
          <PopupNotiMethod />
        </Popup>
        <Alert open={clear} close={() => { setClear(false) }}>
          <div>저장된 내용이 사라집니다. <br /> 새로 작성 하시겠습니까?</div>
        </Alert>
        <h4>작업 개요 <span className='color-primary'>(*) 검토자 : 권역별 작업담당자 선택</span></h4>
        <RegistNomal />
        {/* <div className="tabs-container">
          <div className='tabs-wrap'>
            <Tab label="일반작업 등록" activeTab={activeTab} onClick={handleTabClick} className="active" />
            <Tab label="긴급작업 등록" activeTab={activeTab} onClick={handleTabClick} />
          </div>
          <TabContent activeTab={activeTab} />
        </div> */}
      </div>
    </>
  )
}
// const Tab = ({ label, activeTab, onClick }) => {
//   const handleClick = () => {
//     onClick(label);
//   };

//   return (
//     <div className={`tab ${activeTab === label ? 'active' : ''}`} onClick={handleClick}>
//       {label}
//     </div>
//   );
// };

// const TabContent = ({ activeTab }) => {
//   return (
//     <div className="tab-content">
//       {activeTab === '일반작업 등록' && <RegistNomal />}
//       {activeTab === '긴급작업 등록' && <RegistUrgent />}
//     </div>
//   );
// };

export default ServicetaskRegist;
