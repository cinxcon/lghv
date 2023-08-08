import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentTitle from '../layout/ContentTitle';
import ApprovalDetailContent from './component/ApprovalDetailContent';
import { Popup, Alert } from '../popup/Popup';
import PopupNotiMethod from '../popup/popupDetail/Popup_NotiMethod';
import PopupProcessHistory from '../popup/popupDetail/Popup_ProcessHistory';

function ApprovalCompleteDetail() {
  const navigate = useNavigate();
  const [onTime, setOnTime] = useState(false);
  const [notimethod, setNotimethod] = useState(false);
  const [history, setHistory] = useState(false);

  return (
    <>
      <ContentTitle />
      <div className="detail-top-btn-group">
        <button className='btn' onClick={() => { setOnTime(true) }}>OnTime반려</button>
        <button className='btn' onClick={() => { setNotimethod(true) }}>통보방법</button>
        <button className='btn' onClick={() => { setHistory(true) }}>처리내역</button>
        <button className='btn btn-low' onClick={() => { navigate(-1) }}>목록</button>
      </div>
      <Alert open={onTime} close={() => { setOnTime(false) }}>
        <div>반려 하시겠습니까?</div>
      </Alert>
      <Popup open={notimethod} close={() => { setNotimethod(false) }} header="통보방법">
        <PopupNotiMethod />
      </Popup>
      <Popup open={history} close={() => { setHistory(false) }} header="처리내역">
        <PopupProcessHistory />
      </Popup>
      <ApprovalDetailContent />
    </>
  )
}

export default ApprovalCompleteDetail;
