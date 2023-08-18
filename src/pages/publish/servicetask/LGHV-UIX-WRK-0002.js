import { useState } from 'react';
import ContentTitle from '../layout/ContentTitle';
import { Popup, Alert } from '../popup/Popup';
import PopupNotiMethod from '../popup/popupDetail/Popup_NotiMethod_Set';
import PopupWorkOnLoad from '../popup/popupDetail/Popup_WorkOnLoad';
import RegistUrgent from './component/RegistUrgent';
import PopupLine from '../popup/popupDetail/Popup_Approval';

function ServicetaskRegist() {
  const [onLoad, setOnLoad] = useState(false);
  const [approvalLine, setApprovalLine] = useState(false);
  const [notimethod, setNotimethod] = useState(false);
  const [clear, setClear] = useState(false);
  const [temp, setTemp] = useState(false);
  return (
    <>
      <ContentTitle />
      <div className='content-section'>
        <div className="detail-top-btn-group">
          <span className='noti color-primary'>(*)는 필수 입력 항목 입니다.</span>
          <button className='btn btn-pop' onClick={() => { setOnLoad(true) }}>불러오기</button>
          <button className='btn btn-pop' onClick={() => { setApprovalLine(true) }}>결제선 지정</button>
          <button className='btn btn-pop' onClick={() => { setNotimethod(true) }}>통보방법</button>
          <button className='btn btn-ref' onClick={() => { setClear(true) }}>새로작성</button>
          <button className='btn btn-ref' onClick={() => { setTemp(true) }}>임시저장</button>
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
        <Alert open={temp} close={() => { setTemp(false) }}>
          <div>임지 저장 하시겠습니까?</div>
        </Alert>
        </div>
        <RegistUrgent />
    </>
  )
}

export default ServicetaskRegist;
