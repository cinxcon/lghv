import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
// import ContentTitle from '../layout/ContentTitle';
import ApprovalDetailContent from './component/ApprovalDetailContent';
import { Popup, Alert } from '../popup/Popup';
import { PopupNotiMethod } from '../popup/popupDetail/Popup_NotiMethod';
import PopupProcessHistory from '../popup/popupDetail/Popup_ProcessHistory';
import WorkInfo from '../layout/WorkInfo';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}

function ApprovalReturnDetail() {
  const navigate = useNavigate();
  const [onTimeCancel, setOnTimeCancel] = useState(false);
  const [notimethod, setNotimethod] = useState(false);
  const [print, setPrint] = useState(false);
  const [history, setHistory] = useState(false);
  const pagedata = {
    title: '결재관리',
    subtitle: '반려함',
    SubMenu: 'yes',
    isDetail: 'yes'
  }
  return (
    <PopupPortal>
      <style>
        {`
          #root {display: none;}
        `}
      </style>
      <div className='new-window-wrap'>
        <ContentTitle data={pagedata} />
        <div className="detail-top-btn-group">
          <button className='btn' onClick={() => { setNotimethod(true) }}>통보방법</button>
          <button className='btn' onClick={() => { setPrint(true) }}>화면인쇄</button>
          <button className='btn' onClick={() => { setHistory(true) }}>처리내역</button>
          <button className='btn btn-low' onClick={() => { navigate(-1) }}>목록</button>
        </div>
        <Alert open={onTimeCancel} close={() => { setOnTimeCancel(false) }}>
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
        <ApprovalDetailContent />
      </div>
    </PopupPortal>
  )
}

export default ApprovalReturnDetail;
