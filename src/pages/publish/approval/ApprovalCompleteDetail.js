import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentTitle from '../layout/ContentTitle';
import ApprovalDetailContent from './component/ApprovalDetailContent';
import { Popup1, Popup2 } from '../popup/Popup';
import PopupNotiMethod from './popupDetail/Popup_NotiMethod';
import PopupProcessHistory from './popupDetail/Popup_ProcessHistory';

function ApprovalCompleteDetail() {
  const navigate = useNavigate();
  const [onTime, setOnTime] = useState(false);
  const [notimethod, setNotimethod] = useState(false);
  const [history, setHistory] = useState(false);

  return (
    <>
      <ContentTitle />
      <div className="detail-top-btn-group">
        <button className='btn btn-sm' onClick={() => { setOnTime(true) }}>OnTime반려</button>
        <button className='btn btn-sm' onClick={() => { setNotimethod(true) }}>통보방법</button>
        <button className='btn btn-sm' onClick={() => { setHistory(true) }}>처리내역</button>
        <button className='btn btn-sm btn-low' onClick={() => { navigate(-1) }}>목록</button>
      </div>
      <Popup2 open={onTime} close={() => { setOnTime(false) }}>
        <div>반려 하시겠습니까?</div>
      </Popup2>
      <Popup1 open={notimethod} close={() => { setNotimethod(false) }} header="통보방법">
        <PopupNotiMethod />
      </Popup1>
      <Popup1 open={history} close={() => { setHistory(false) }} header="처리내역">
        <PopupProcessHistory />
      </Popup1>
      <ApprovalDetailContent />
    </>
  )
}

export default ApprovalCompleteDetail;
