import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentTitle from '../layout/ContentTitle';
import ApprovalDetailContent from './component/ApprovalDetailContent';
import { Popup, Alert } from '../popup/Popup';
import PopupNotiMethod from '../popup/popupDetail/Popup_NotiMethod';
import PopupProcessHistory from '../popup/popupDetail/Popup_ProcessHistory';

function ApprovalTempStorageDetail() {
  const navigate = useNavigate();
  const [notimethod, setNotimethod] = useState(false);
  const [history, setHistory] = useState(false);
  const [modify, setModify] = useState(false);
  const [del, setDelete] = useState(false);
  const [regist, setRegist] = useState(false);

  return (
    <>
      {/* 상단 타이틀 */}
      <ContentTitle />
      {/* 상단 버튼 모음 */}
      {/* <ApprovalTopBtnGroup /> */}
      <div className="detail-top-btn-group">
        <button className='btn' onClick={() => { setNotimethod(true) }}>통보방법</button>
        <button className='btn' onClick={() => { setHistory(true) }}>처리내역</button>
        <button className='btn btn-low' onClick={() => { navigate(-1) }}>목록</button>
      </div>
      <Popup open={notimethod} close={() => { setNotimethod(false) }} header="통보방법">
        <PopupNotiMethod />
      </Popup>
      <Popup open={history} close={() => { setHistory(false) }} header="처리내역">
        <PopupProcessHistory />
      </Popup>
      <ApprovalDetailContent />
      <div className="detail-bottom-btn-group">
        <button className='btn btn-lg' onClick={() => { setModify(true) }}>수정</button>
        <button className='btn btn-lg' onClick={() => { setDelete(true) }}>삭제</button>
        <button className='btn btn-lg btn-primary' onClick={() => { setRegist(true) }}>등록</button>
      </div>
      <Alert open={modify} close={() => { setModify(false) }}>
        <div>임시 저장된 내용을수정 하시겠습니까?</div>
      </Alert>
      <Alert open={del} close={() => { setDelete(false) }}>
        <div>임시 저장된 내용을 삭제 하시겠습니까?</div>
      </Alert>
      <Alert open={regist} close={() => { setRegist(false) }}>
        <div>임시 저장된 내용을 등록 하시겠습니까?</div>
      </Alert>
    </>
  )
}

export default ApprovalTempStorageDetail;
