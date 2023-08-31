import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
function ServicetaskDetail() {
  const navigate = useNavigate();
  const [notimethod, setNotimethod] = useState(false);
  const [history, setHistory] = useState(false);
  const [workStop, setWorkStop] = useState();
  const [workCancel, setWorkCancel] = useState();
  const [workFin, setWorkFin] = useState();
  const [workExtend, setWorkExtend] = useState();
  const [refuse, setRefuse] = useState(false);
  const [approve, setApprove] = useState(false);
  const pagedata = {
    title: '작업관리',
    subtitle: '작업상세',
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
      <ContentTitle data={pagedata} />
        <div className="detail-top-btn-group">
          <button className='btn btn-pop' onClick={() => { setNotimethod(true) }}>통보방법</button>
          <button className='btn btn-pop' onClick={() => { setHistory(true) }}>처리내역</button>
          <button className='btn btn-print' onClick={handlePrint}>화면인쇄</button>
          <button className='btn btn-list' onClick={() => { navigate(-1) }}>목록</button>
        </div>
        <Popup open={notimethod} close={() => { setNotimethod(false) }} header="통보방법">
          <PopupNotiMethodWRK />
        </Popup>
        <Popup open={history} close={() => { setHistory(false) }} header="처리내역">
          <PopupProcessHistory />
        </Popup>
        <ServiceDetail />
        <div className='detail-bottom-btn-group'>
          <div>
            <button className='btn btn-lg bnt-low' onClick={() => { setWorkStop(true) }}>작업중단</button>
            <button className='btn btn-lg bnt-low' onClick={() => { setWorkCancel(true) }}>작업취소</button>
            <button className='btn btn-lg' onClick={() => { setWorkExtend(true) }}>작업연장</button>
            <button className='btn btn-lg btn-primary' onClick={() => { setWorkFin(true) }}>작업완료</button>
          </div>
          <div className='mt6'>
            <button className='btn btn-lg btn-low' onClick={() => { setRefuse(true) }}>반려</button>
            <button className='btn btn-lg btn-primary' onClick={() => { setApprove(true) }}>승인</button>
          </div>
        </div>
        <Popup open={workStop} close={() => { setWorkStop(false) }} header="[작업중단] 의견" footer={ <PopupButtons close={() => { setWorkStop(false) }} /> }>
          <textarea></textarea>
        </Popup>
        <Popup open={workCancel} close={() => { setWorkCancel(false) }} header="[작업취소] 의견" footer={ <PopupButtons close={() => { setWorkCancel(false) }} /> }>
          <textarea></textarea>
        </Popup>
        <Popup open={workFin} close={() => { setWorkFin(false) }} header="[작업완료] 의견" footer={ <PopupButtons close={() => { setWorkFin(false) }} /> }>
          <textarea></textarea>
        </Popup>
        <Popup open={workExtend} close={() => { setWorkExtend(false) }} header="[작업연장] 의견" footer={ <PopupButtons close={() => { setWorkExtend(false) }} /> }>
          <div className='mb15'>
            <input type="radio" name="time" id="time_1" />
            <label htmlFor="time_1">1시간</label>
            <input type="radio" name="time" id="time_2" />
            <label htmlFor="time_2">2시간</label>
            <input type="radio" name="time" id="time_3" />
            <label htmlFor="time_3">3시간</label>
          </div>
          <textarea></textarea>
        </Popup>
        <Popup open={refuse} close={() => { setRefuse(false) }} header="[반려] 의견" footer={ <PopupButtons close={() => { setRefuse(false) }} /> }>
          <textarea></textarea>
        </Popup>
        <Popup open={approve} close={() => { setApprove(false) }} header="[승인] 의견" footer={ <PopupButtons close={() => { setApprove(false) }} /> }>
          <textarea></textarea>
        </Popup>
        </div>
        </PopupPortal>
    </>
  )
}

function PopupButtons(props) {
  return (
    <div className="btn-group">
      <button className="btn btn-low" onClick={props.close}>취소</button>
      <button className="btn btn-primary">확인</button>
    </div>
  )
}

export default ServicetaskDetail;
