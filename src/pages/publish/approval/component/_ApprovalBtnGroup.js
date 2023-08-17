import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Popup, Alert } from '../../popup/Popup';
import PopupNotiMethod from '../../popup/popupDetail/Popup_NotiMethod';
import PopupProcessHistory from '../../popup/popupDetail/Popup_ProcessHistory';

function ApprovalTopBtnGroup() {
  const navigate = useNavigate();
  const [refuse, setRefuse] = useState(false);
  const [refuseCancel, setRefuseCancel] = useState(false);
  const [notimethod, setNotimethod] = useState(false);
  const [print, setPrint] = useState(false);
  const [history, setHistory] = useState(false);

  return (
    <>
      <div className="detail-top-btn-group">
        <button className='btn' onClick={() => { setRefuse(true) }}>onTime반려</button>
        <button className='btn' onClick={() => { setRefuseCancel(true) }}>반려취소</button>
        <button className='btn' onClick={() => { setNotimethod(true) }}>통보방법</button>
        <button className='btn' onClick={() => { setPrint(true) }}>화면인쇄</button>
        <button className='btn' onClick={() => { setHistory(true) }}>처리내역</button>
        <button className='btn btn-low' onClick={() => { navigate(-1) }}>목록</button>
      </div>
      <Alert open={refuse} close={() => { setRefuse(false) }}>
        <div>반려 하시겠습니까?</div>
      </Alert>
      <Alert open={refuseCancel} close={() => { setRefuseCancel(false) }}>
        <div>반려를 취소 하시겠습니까?</div>
      </Alert>
      <Popup open={notimethod} close={() => { setNotimethod(false) }} header="통보방법">
        <PopupNotiMethod />
      </Popup>
      <Popup open={print} close={() => { setPrint(false) }} header="화면인쇄">
        화면인쇄
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
  const [approve, setApprove] = useState(false);
  const [modify, setModify] = useState(false);
  const [del, setDelete] = useState(false);
  const [regist, setRegist] = useState(false);

  const [workStop, setWorkStop] = useState();
  const [workCancel, setWorkCancel] = useState();
  const [workFin, setWorkFin] = useState();
  const [workExtend, setWorkExtend] = useState();

  return (
    <>
      <div className='detail-bottom-btn-group'>
        <button className='btn btn-lg btn-primary' onClick={() => { setConfirm(true) }}>결재</button>
        <button className='btn btn-lg btn-primary' onClick={() => { setAgree(true) }}>합의</button>
        <button className='btn btn-lg btn-primary' onClick={() => { setApprove (true) }}>승인</button>
        <button className='btn btn-lg' onClick={() => { setModify(true) }}>수정</button>
        <button className='btn btn-lg' onClick={() => { setDelete(true) }}>삭제</button>
        <button className='btn btn-lg' onClick={() => { setRegist(true) }}>등록</button>

        <button className='btn' onClick={() => { setWorkStop(true) }}>작업중단</button>
          <button className='btn' onClick={() => { setWorkCancel(true) }}>작업취소</button>
          <button className='btn' onClick={() => { setWorkFin(true) }}>작업완료</button>
          <button className='btn' onClick={() => { setWorkExtend(true) }}>작업연장</button>
      </div>
      <Alert open={confirm} close={() => { setConfirm(false) }}>
        <div>결재 하시겠습니까?</div>
      </Alert>
      <Alert open={agree} close={() => { setAgree(false) }}>
        <div>결재를 합의 하시겠습니까?</div>
      </Alert>
      <Alert open={approve} close={() => { setApprove(false) }}>
        <div>승인 하시겠습니까?</div>
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

      <Popup open={workStop} close={() => { setWorkStop(false) }} header="작업중단">
        <textarea></textarea>
      </Popup>
      <Popup open={workCancel} close={() => { setWorkCancel(false) }} header="작업취소">
        <textarea></textarea>
      </Popup>
      <Popup open={workFin} close={() => { setWorkFin(false) }} header="작업완료">
        <textarea></textarea>
      </Popup>
      <Popup open={workExtend} close={() => { setWorkExtend(false) }} header="작업연장">
        <textarea></textarea>
      </Popup>
    </>
  )
}

export { ApprovalTopBtnGroup, ApprovalBotBtnGroup };
