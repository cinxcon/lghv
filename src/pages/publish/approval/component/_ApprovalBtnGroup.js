import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Popup, Alert } from '../../popup/Popup';
import PopupNotiMethod from '../popupDetail/Popup_NotiMethod';
import PopupProcessHistory from '../popupDetail/Popup_ProcessHistory';

function ApprovalTopBtnGroup() {
  const navigate = useNavigate();
  const [onTime, setOnTime] = useState(false);
  const [onTimeCancel, setOnTimeCancel] = useState(false);
  const [notimethod, setNotimethod] = useState(false);
  const [history, setHistory] = useState(false);

  return (
    <>
      <div className="detail-top-btn-group">
        <button className='btn' onClick={() => { setOnTime(true) }}>OnTime반려</button>
        <button className='btn' onClick={() => { setOnTimeCancel(true) }}>반려취소</button>
        <button className='btn' onClick={() => { setNotimethod(true) }}>통보방법</button>
        <button className='btn' onClick={() => { setHistory(true) }}>처리내역</button>
        <button className='btn btn-low' onClick={() => { navigate(-1) }}>목록</button>
      </div>
      <Alert open={onTime} close={() => { setOnTime(false) }}>
        <div>반려 하시겠습니까?</div>
      </Alert>
      <Alert open={onTimeCancel} close={() => { setOnTimeCancel(false) }}>
        <div>반려를 취소 하시겠습니까?</div>
      </Alert>
      <Popup open={notimethod} close={() => { setNotimethod(false) }} header="통보방법">
        <PopupNotiMethod />
      </Popup>
      <Popup open={history} close={() => { setHistory(false) }} header="처리내역">
        <PopupProcessHistory />
      </Popup>
    </>
  )
}

function ApprovalBotBtnGroup() {
  const [confirm, setConfirm] = useState(false);
  const [agree, setAgree] = useState(false);
  const [modify, setModify] = useState(false);
  const [del, setDelete] = useState(false);
  const [regist, setRegist] = useState(false);

  return (
    <>
      <div className='detail-bottom-btn-group'>
        <button className='btn btn-lg btn-primary' onClick={() => { setConfirm(true) }}>결재</button>
        <button className='btn btn-lg' onClick={() => { setModify(true) }}>수정</button>
        <button className='btn btn-lg' onClick={() => { setDelete(true) }}>삭제</button>
        <button className='btn btn-lg' onClick={() => { setRegist(true) }}>등록</button>
      </div>
      <Alert open={confirm} close={() => { setConfirm(false) }}>
        <div>결재 하시겠습니까?</div>
      </Alert>
      <Alert open={agree} close={() => { setAgree(false) }}>
        <div>결재를 합의 하시겠습니까?</div>
      </Alert>
      <Alert open={modify} close={() => { setModify(false) }}>
        <div>수정 하시겠습니까?</div>
      </Alert>
      <Alert open={del} close={() => { setDelete(false) }}>
        <div>삭제 하시겠습니까?</div>
      </Alert>
      <Alert open={regist} close={() => { setRegist(false) }}>
        <div>등록 하시겠습니까?</div>
      </Alert>
    </>
  )
}

export { ApprovalTopBtnGroup, ApprovalBotBtnGroup };
