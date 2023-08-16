import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentTitle from '../layout/ContentTitle';
import ApprovalDetailContent from './component/ApprovalDetailContent';
import { Popup, Alert } from '../popup/Popup';
import { PopupNotiMethod } from '../popup/popupDetail/Popup_NotiMethod';
import PopupProcessHistory from '../popup/popupDetail/Popup_ProcessHistory';

function ApprovalStandbyDetail() {
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);
  const [agree, setAgree] = useState(false);
  const [modify, setModify] = useState(false);
  const [del, setDelete] = useState(false);
  const [refuse, setRefuse] = useState(false);
  const [notimethod, setNotimethod] = useState(false);
  const [print, setPrint] = useState(false);
  const [history, setHistory] = useState(false);

  return (
    <>
      <ContentTitle />
      <div className="detail-top-btn-group">
        <button className='btn' onClick={() => { setRefuse(true) }}>onTime반려</button>
        <button className='btn' onClick={() => { setNotimethod(true) }}>통보방법</button>
        <button className='btn' onClick={() => { setPrint(true) }}>화면인쇄</button>
        <button className='btn' onClick={() => { setHistory(true) }}>처리내역</button>
        <button className='btn btn-low' onClick={() => { navigate(-1) }}>목록</button>
      </div>
      <Alert open={refuse} close={() => { setRefuse(false) }}>
        <div>반려 하시겠습니까?</div>
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
      <ApprovalDetailContent />
      <div className='detail-bottom-btn-group'>
        {/* 결재자용 버튼 */}
        <button className='btn btn-lg btn-primary' onClick={() => { setConfirm(true) }}>결재</button>
        {/* 기안자용 버튼 */}
        <button className='btn btn-lg' onClick={() => { setModify(true) }}>수정</button>
        <button className='btn btn-lg' onClick={() => { setDelete(true) }}>삭제</button>
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
    </>
  )
}

export default ApprovalStandbyDetail;
