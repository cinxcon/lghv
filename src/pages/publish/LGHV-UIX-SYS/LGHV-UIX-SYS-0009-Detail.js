import { useState } from 'react';
import ContentTitle from '../layout/ContentTitle';
import { Popup } from '../popup/Popup';
import { PopupNotiMethodWRK } from '../popup/popupDetail/Popup_NotiMethod';
import { PopupProcessHistory } from '../popup/popupDetail/Popup_ProcessHistory';
import ServiceDetail from './component/ServiceDetail';
import { createPortal } from 'react-dom';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}
function SysSendCustomTxtMsgLogDetail() {
  const [notimethod, setNotimethod] = useState(false);
  const [history, setHistory] = useState(false);
  const pagedata = {
    title: '로그관리',
    subtitle: '고객문자 발송내역 상세',
    SubMenu: 'yes',
    isDetail: 'yes'
  }
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <PopupPortal>
      <style>
        {`
          #root {display: none;}
        `}
      </style>
      <div className='new-window-wrap'>
      <button type='button' className='pop-close' onClick={() => { window.close() }}>닫기</button>
      <ContentTitle data={pagedata} />
        <div className="detail-top-btn-group">
          <button className='btn btn-pop' onClick={() => { setNotimethod(true) }}>통보방법</button>
          <button className='btn btn-pop' onClick={() => { setHistory(true) }}>처리내역</button>
          <button className='btn btn-print' onClick={handlePrint}>화면인쇄</button>
        </div>
        <Popup open={notimethod} close={() => { setNotimethod(false) }} header="통보방법">
          <PopupNotiMethodWRK />
        </Popup>
        <Popup open={history} close={() => { setHistory(false) }} header="처리내역">
          <PopupProcessHistory />
        </Popup>
        <ServiceDetail />
        </div>
        </PopupPortal>
    </>
  )
}

export default SysSendCustomTxtMsgLogDetail;
