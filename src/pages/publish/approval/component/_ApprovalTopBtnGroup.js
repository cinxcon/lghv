import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Popup1, Popup2 } from '../../popup/Popup';
import PopupNotiMethod from '../popupDetail/Popup_NotiMethod';
import PopupProcessHistory from '../popupDetail/Popup_ProcessHistory';

function ApprovalTopBtnGroup() {
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);
  const [agree, setAgree] = useState(false);
  const [onTime, setOnTime] = useState(false);
  const [onTimeCancel, setOnTimeCancel] = useState(false);
  const [modify, setModify] = useState(false);
  const [del, setDelete] = useState(false);
  const [notimethod, setNotimethod] = useState(false);
  const [history, setHistory] = useState(false);

  return (
    <>
      <div className="detail-top-btn-group">
        <button className='btn btn-sm' onClick={() => { setConfirm(true) }}>확인</button>
        <button className='btn btn-sm' onClick={() => { setOnTime(true) }}>OnTime반려</button>
        <button className='btn btn-sm' onClick={() => { setOnTimeCancel(true) }}>반려취소</button>
        <button className='btn btn-sm' onClick={() => { setModify(true) }}>수정</button>
        <button className='btn btn-sm' onClick={() => { setDelete(true) }}>삭제</button>
        <button className='btn btn-sm' onClick={() => { setNotimethod(true) }}>통보방법</button>
        <button className='btn btn-sm' onClick={() => { setHistory(true) }}>처리내역</button>
        <button className='btn btn-sm btn-low' onClick={() => { navigate(-1) }}>목록</button>
      </div>
      <Popup2 open={confirm} close={() => { setConfirm(false) }}>
        <div>결재 하시겠습니까?</div>
      </Popup2>
      <Popup2 open={agree} close={() => { setAgree(false) }}>
        <div>결재를 합의 하시겠습니까?</div>
      </Popup2>
      <Popup2 open={onTime} close={() => { setOnTime(false) }}>
        <div>반려 하시겠습니까?</div>
      </Popup2>
      <Popup2 open={onTimeCancel} close={() => { setOnTimeCancel(false) }}>
        <div>반려를 취소 하시겠습니까?</div>
      </Popup2>
      <Popup2 open={modify} close={() => { setModify(false) }}>
        <div>수정 하시겠습니까?</div>
      </Popup2>
      <Popup2 open={del} close={() => { setDelete(false) }}>
        <div>삭제 하시겠습니까?</div>
      </Popup2>
      <Popup1 open={notimethod} close={() => { setNotimethod(false) }} header="통보방법">
        <PopupNotiMethod />
      </Popup1>
      <Popup1 open={history} close={() => { setHistory(false) }} header="처리내역">
        <PopupProcessHistory />
      </Popup1>
    </>
  )
}

export default ApprovalTopBtnGroup;